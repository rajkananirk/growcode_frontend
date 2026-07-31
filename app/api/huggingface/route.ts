import { InferenceClient } from "@huggingface/inference";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

const DEFAULT_MODEL = "mistralai/Mistral-7B-Instruct-v0.3";
const MAX_INPUT_LENGTH = 12_000;

const supportedTasks = [
  "text-generation",
  "summarization",
  "text-classification",
] as const;

type SupportedTask = (typeof supportedTasks)[number];

type RequestBody = {
  input?: unknown;
  model?: unknown;
  task?: unknown;
  options?: {
    maxNewTokens?: unknown;
    temperature?: unknown;
    topP?: unknown;
  };
};

function isSupportedTask(value: unknown): value is SupportedTask {
  return supportedTasks.includes(value as SupportedTask);
}

function numberInRange(
  value: unknown,
  fallback: number,
  min: number,
  max: number,
) {
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

export async function POST(request: Request) {
  const token = process.env.HUGGINGFACE_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Hugging Face is not configured on the server." },
      { status: 500 },
    );
  }

  let body: RequestBody;

  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  const input = typeof body.input === "string" ? body.input.trim() : "";
  const model = typeof body.model === "string" ? body.model.trim() : DEFAULT_MODEL;
  const task = body.task ?? "text-generation";

  if (!input) {
    return NextResponse.json(
      { error: "`input` must be a non-empty string." },
      { status: 400 },
    );
  }

  if (input.length > MAX_INPUT_LENGTH) {
    return NextResponse.json(
      { error: `Input cannot exceed ${MAX_INPUT_LENGTH} characters.` },
      { status: 413 },
    );
  }

  if (!model || model.length > 200) {
    return NextResponse.json(
      { error: "`model` must be a valid Hugging Face model ID." },
      { status: 400 },
    );
  }

  if (!isSupportedTask(task)) {
    return NextResponse.json(
      { error: `Unsupported task. Use one of: ${supportedTasks.join(", ")}.` },
      { status: 400 },
    );
  }

  const client = new InferenceClient(token);

  try {
    switch (task) {
      case "text-generation": {
        const result = await client.textGeneration({
          model,
          inputs: input,
          parameters: {
            max_new_tokens: Math.round(
              numberInRange(body.options?.maxNewTokens, 256, 1, 1_024),
            ),
            temperature: numberInRange(
              body.options?.temperature,
              0.7,
              0,
              2,
            ),
            top_p: numberInRange(body.options?.topP, 0.95, 0.01, 1),
            return_full_text: false,
          },
        });

        return NextResponse.json({
          task,
          model,
          output: result.generated_text,
        });
      }

      case "summarization": {
        const result = await client.summarization({ model, inputs: input });

        return NextResponse.json({
          task,
          model,
          output: result.summary_text,
        });
      }

      case "text-classification": {
        const result = await client.textClassification({ model, inputs: input });

        return NextResponse.json({ task, model, output: result });
      }
    }
  } catch (error) {
    console.error("Hugging Face inference failed", error);

    const message =
      error instanceof Error && /model|provider|available/i.test(error.message)
        ? "The requested model is unavailable for this inference task or provider."
        : "The inference request failed. Please try again.";

    return NextResponse.json({ error: message }, { status: 502 });
  }
}
