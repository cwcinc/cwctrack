import { test, expect } from '@playwright/test';
import { bootGame } from './helpers/setup.js';

test.beforeEach(async ({ page }) => {
  await bootGame(page);
});

test('test garage entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Garage' }).click();
  await expect(page.locator('.customization-ui')).toBeVisible({ timeout: 20_000 });
});

test('test editor entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Editor' }).click();
  await expect(page.locator('.editor-ui')).toBeVisible({ timeout: 20_000 });
});

test('test settings entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  await expect(page.locator('.settings-menu-ui')).toBeVisible({ timeout: 20_000 });
});

test('test multiplayer entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Multiplayer' }).click();
  await expect(page.locator('.multiplayer-ui > .join')).toBeVisible({ timeout: 20_000 });
});

test('test play entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(page.locator('.track-selection-ui')).toBeVisible({ timeout: 20_000 });
});