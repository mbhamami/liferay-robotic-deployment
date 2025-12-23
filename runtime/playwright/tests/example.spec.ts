import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://rd-liferay:8080/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Screen Name' }).click();
  await page.getByRole('textbox', { name: 'Screen Name' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByLabel('Sign In- Loading').getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Open Applications Menu Ctrl' }).click();
  await page.getByRole('tab', { name: 'Control Panel' }).click();
  await page.getByRole('menuitem', { name: 'Sites' }).click();
  await page.getByRole('link', { name: 'Add Site' }).click();
  await page.getByRole('button', { name: 'Select Template: Blank Site' }).click();
  await page.locator('iframe[title="Add Site"]').contentFrame().getByRole('textbox', { name: 'Name Required' }).fill('Liferay Robotic');
  await page.locator('iframe[title="Add Site"]').contentFrame().getByRole('button', { name: 'Add' }).click();
  await page.getByRole('tab', { name: 'Open Product Menu' }).click();
  await page.getByRole('menuitem', { name: 'Site Builder' }).click();
  await page.getByRole('menuitem', { name: 'Pages', exact: true }).click();
  await page.getByText('New', { exact: true }).click();
  await page.getByRole('button', { name: 'Blank' }).click();
  await page.locator('iframe[title="Add Page"]').contentFrame().getByRole('textbox', { name: 'Name Required' }).click();
  await page.locator('iframe[title="Add Page"]').contentFrame().getByRole('textbox', { name: 'Name Required' }).fill('Accueil');
  await page.locator('iframe[title="Add Page"]').contentFrame().getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Publish' }).click();
});