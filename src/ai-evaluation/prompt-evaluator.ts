import { EvaluationInput, EvaluationMetric } from "../types";

export class PromptEvaluator {
  evaluate(input: EvaluationInput): EvaluationMetric[] {
    const metrics: EvaluationMetric[] = [];

    const semanticScore = this.scoreSemanticRelevance(input.prompt, input.response);
    metrics.push({
      name: "semantic_relevance",
      score: semanticScore,
      threshold: 0.8,
      passed: semanticScore >= 0.8
    });

    const toneScore = this.scoreToneCompliance(input.response);
    metrics.push({
      name: "tone_compliance",
      score: toneScore,
      threshold: 0.75,
      passed: toneScore >= 0.75
    });

    return metrics;
  }

  private scoreSemanticRelevance(prompt: string, response: string): number {
    const promptWords = new Set(prompt.toLowerCase().split(/\W+/).filter(Boolean));
    const responseWords = response.toLowerCase().split(/\W+/).filter(Boolean);

    const overlap = responseWords.filter((word) => promptWords.has(word)).length;
    const total = Math.max(responseWords.length, 1);

    return Math.min(overlap / total, 1);
  }

  private scoreToneCompliance(response: string): number {
    const lower = response.toLowerCase();
    const hasPoliteTone = /please|thanks|welcome|happy|sorry|certainly/.test(lower);
    return hasPoliteTone ? 0.9 : 0.7;
  }
}