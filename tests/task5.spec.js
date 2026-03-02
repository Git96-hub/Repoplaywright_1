import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1767348800852&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Amazon');
  await page.getByText('Amazon', { exact: true }).click();
  await page.locator('iframe[name="a-8q0vdv89f8p1"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-8q0vdv89f8p1"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-8q0vdv89f8p1"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-8q0vdv89f8p1"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-8q0vdv89f8p1"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-8q0vdv89f8p1"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.goto('https://www.google.com/search?q=amazon&sca_esv=4447b92845df992b&source=hp&ei=bJpXacfdAbugvr0PiOeimAo&iflsig=AOw8s4IAAAAAaVeofIKuiuJbdl_47WQdyKcndH5ewTDL&gs_ssp=eJzj4tDP1TfITc9OV2A0YHRg8GJLzE2sys8DAELoBhw&oq=amaz&gs_lp=Egdnd3Mtd2l6IgRhbWF6KgIIADIREC4YgAQYsQMY0QMYgwEYxwEyCBAAGIAEGLEDMgsQABiABBixAxiDATILEAAYgAQYsQMYyQMyCBAAGIAEGLEDMggQABiABBixAzILEAAYgAQYkgMYigUyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQNIlB1QigRY_AhwAXgAkAEAmAGHAaAB_AOqAQMwLjS4AQHIAQD4AQGYAgWgApQEqAIKwgIKEC4YAxjqAhiPAcICChAAGAMY6gIYjwHCAgUQLhiABMICDhAuGIAEGLEDGIMBGIoFwgILEC4YgAQY0QMYxwHCAggQLhiABBixA8ICDhAAGIAEGLEDGIMBGIoFwgIUEC4YgAQYsQMYxwEYigUYjQYYrwGYAwTxBbpmxcwVFxv9kgcDMS40oAfwKbIHAzAuNLgHkATCBwUwLjIuM8gHEYAIAA&sclient=gws-wiz&sei=c5pXae0j1sO-vQ-J-ujRCw');
  await page.locator('#tads').getByRole('link', { name: 'Shop online at Amazon India' }).click();
});