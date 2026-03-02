import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByRole('heading', { name: 'todos' }).click();
  await expect(page.getByTestId('header').getByRole('heading')).toContainText('todos');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('place');
  await expect(page.getByTestId('text-input')).toBeVisible();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('shimoga');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('bangalore');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('shimoga').click();
  await page.getByRole('listitem').filter({ hasText: 'place' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'shimoga' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('html')).toBeVisible();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-list')).toMatchAriaSnapshot(`- text: place`);
  await expect(page.getByTestId('todo-list')).toMatchAriaSnapshot(`- text: shimoga`);
  await page.getByRole('link', { name: 'All' }).click();

  await page.locator('html').click();
});