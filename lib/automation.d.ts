export type ContactLead = {
  name: string;
  email: string;
  company?: unknown;
  phone?: unknown;
  service?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  brief: string;
  [key: string]: unknown;
};

export function automateContactResponse(
  contact: ContactLead,
): Promise<{ draft: string; model: string }>;
