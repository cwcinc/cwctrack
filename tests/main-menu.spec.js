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

test('dynamic theme hue slider updates css variable', async ({ page }) => {
  await page.getByRole('button', { name: 'Settings' }).click();
  const slider = page.locator('.cwctrack-theme-setting input[type="range"]');
  await expect(slider).toBeVisible({ timeout: 20_000 });

  await slider.evaluate((element, value) => {
    element.value = value;
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }, '120');

  await expect.poll(async () => {
    return await page.evaluate(() => {
      return document.documentElement.style.getPropertyValue('--cwctrack-theme-hue').trim();
    });
  }).toBe('120deg');
});

test('test multiplayer entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Multiplayer' }).click();
  await expect(page.locator('.multiplayer-ui > .join')).toBeVisible({ timeout: 20_000 });
});

test('test play entry button', async ({ page }) => {
  await page.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(page.locator('.track-selection-ui')).toBeVisible({ timeout: 20_000 });
});