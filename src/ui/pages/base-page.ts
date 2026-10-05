import { Page, Locator } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async waitForLoaded() {
    await this.page.waitForLoadState("networkidle");
  }

  getByRole(role: string, name: string): Locator {
    return this.page.getByRole(role as any, { name });
  }
}