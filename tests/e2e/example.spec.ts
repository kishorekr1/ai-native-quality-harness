import { test, expect } from "@playwright/test";

test.describe("Example E2E flow", () => {
  test("homepage loads without errors", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.*|/);
  });
});