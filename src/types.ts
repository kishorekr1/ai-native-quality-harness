export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiRequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
}

export interface QualityAssertionResult {
  passed: boolean;
  message: string;
  details?: Record<string, unknown>;
}

export interface EvaluationInput {
  prompt: string;
  response: string;
  expectedIntent?: string;
}

export interface EvaluationMetric {
  name: string;
  score: number;
  threshold: number;
  passed: boolean;
  notes?: string;
}