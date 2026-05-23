import { test, expect } from '@playwright/test';
import { bootGame } from './helpers/setup.js';

test.describe.configure({ timeout: 20_000 });

test.beforeEach(async ({ page }) => {
  await bootGame(page);
});

test('test garage entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Garage' }).click();
  await expect(page.locator('.customization-ui')).toBeVisible();
});

test('test editor entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Editor' }).click();
  await expect(page.locator('.editor-ui')).toBeVisible();
});

test('test settings entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await expect(page.locator('.settings-menu-ui')).toBeVisible();
});

test('test multiplayer entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Multiplayer' }).click();
  await expect(page.locator('.multiplayer-ui > .join')).toBeVisible();
});

test('test play entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(page.locator('.track-selection-ui')).toBeVisible();
});