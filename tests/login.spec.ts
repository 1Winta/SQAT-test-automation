import { test, expect } from "@playwright/test";

test("should log in with valid credentials", async ({ page }) => {
  // Navigate to the login page
  await page.goto("/index.html");

  // Fill in the login form
  const username = page.locator("#username");
  const password = page.locator("#password");
  const loginButton = page.locator("#login-btn");

  await username.fill("user");
  await password.fill("pass");
  await loginButton.click();

  await expect(page).toHaveURL(/dashboard.html/);
});

test("should show an error message with invalid credentials", async ({
  page,
}) => {
  await page.goto("/index.html");

  // Fill in the login form
  const username = page.locator("#username");
  const password = page.locator("#password");
  const loginButton = page.locator("#login-btn");

  await username.fill("user1");
  await password.fill("pass1");
  await loginButton.click();

  // Expect to see an error message
  const message = page.locator("#message");
  await expect(message).toHaveText("Invalid credentials!");
});
