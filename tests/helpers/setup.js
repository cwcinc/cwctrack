import { expect } from '@playwright/test';

export async function bootGame(page, url='http://localhost:8080') {
  await page.goto(url);

  // dismiss hardware acceleration warning
  const warning = page.locator('.message-box-ui');
  await expect(warning).toBeVisible( { timeout: 30_000 } );
  await warning.getByRole('button', { name: 'Ok' }).click();
  await expect(warning).toBeHidden();
};