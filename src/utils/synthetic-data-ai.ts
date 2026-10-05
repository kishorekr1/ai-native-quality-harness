export class SyntheticDataAI {
  static generateUserFixture(overrides: Record<string, unknown> = {}) {
    return {
      firstName: "Test",
      lastName: "User",
      email: `test.user.${Date.now()}@example.com`,
      role: "qa",
      status: "active",
      ...overrides
    };
  }

  static generateOrderFixture(overrides: Record<string, unknown> = {}) {
    return {
      id: `ORD-${Date.now()}`,
      total: 199.99,
      currency: "USD",
      status: "pending",
      ...overrides
    };
  }
}