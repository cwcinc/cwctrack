import { test, expect } from '@playwright/test';
import { bootGame } from './helpers/setup.js';
import { readFileSync } from 'fs';
import { createHash } from 'crypto';

test.beforeEach(async ({ page }) => {
  await bootGame(page); // 'https://app-polytrack.kodub.com/0.6.0/'
});

test('track thumbnail matches expected hash', async ({ page }) => {
  await page.getByRole('button', { name: 'Play', exact: true }).click();
  await page.getByRole('button', { name: 'Import', exact: true }).click();

  // load walmart track
  const trackCode = readFileSync('tests/tracks/walmart.track', 'utf8').trim();

  await page.locator('.track-export-ui > .box > textarea').fill(trackCode);
  await page.locator('.track-export-ui > .box > .bar').getByRole('button', { name: 'Import', exact: true }).click();

  const canvas = page.locator('.side-panel > .thumbnail canvas');
  await expect(canvas).toBeVisible();

  // wait for the canvas to have pixels drawn
  await expect.poll(async () => {
    return await canvas.evaluate(el => {
      const ctx = el.getContext('2d');
      if (!ctx) return false;
      const data = ctx.getImageData(0, 0, el.width, el.height).data;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] !== 0) return true;
      }
      return false;
    });
  }, { timeout: 5000 }).toBe(true);

  const actualDataUrl = await canvas.evaluate(el => el.toDataURL('image/png'));

  const actualBuffer = Buffer.from(actualDataUrl.split(',')[1], 'base64');
  const actualHash = createHash('sha256').update(actualBuffer).digest('hex');
  expect(actualHash).toBe('17185da9b70a7ac115bfd4ae447b1c82b2c286ade4161f1527937c9f9594fe00');
});