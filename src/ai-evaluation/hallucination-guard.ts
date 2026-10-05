import { EvaluationInput, QualityAssertionResult } from "../types";

export class HallucinationGuard {
  check(input: EvaluationInput): QualityAssertionResult {
    const unsupportedClaims = this.detectUnsupportedClaims(input.response);

    if (unsupportedClaims.length > 0) {
      return {
        passed: false,
        message: "Potential hallucination detected.",
        details: { unsupportedClaims }
      };
    }

    return {
      passed: true,
      message: "No obvious hallucination patterns found."
    };
  }

  private detectUnsupportedClaims(response: string): string[] {
    const claimPatterns = [
      /definitely/,
      /guaranteed/,
      /always/,
      /never/,
      /proved/,
      /confirmed/
    ];

    return response
      .split(/[.!?]/)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0)
      .filter((sentence) => claimPatterns.some((pattern) => pattern.test(sentence.toLowerCase())));
  }
}