import { test, expect } from '@playwright/test';

test('Google search amzon', async ({ page }) => {
  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);

  await page.fill('textarea[name="q"]', 'amazon');
  await page.press('textarea[name="q"]', 'Enter');
  await page.goto('https://www.amazon.in/')
  await page.waitforselectors('#search')

  await page.screenshot({ path: 'amazon page.png' });
});