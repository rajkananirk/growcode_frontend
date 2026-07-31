export type InferenceRequest = {
  input: string;
  model?: string;
  task?: "text-generation" | "summarization" | "text-classification";
  options?: {
    maxNewTokens?: number;
    temperature?: number;
    topP?: number;
  };
};

export async function runInference<T = string>(payload: InferenceRequest) {
  const response = await fetch("/api/huggingface", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as {
    output?: T;
    error?: string;
    model?: string;
    task?: string;
  };

  if (!response.ok || data.output === undefined) {
    throw new Error(data.error ?? "Inference request failed.");
  }

  return data.output;
}
