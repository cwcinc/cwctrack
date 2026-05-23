import { test, expect } from '@playwright/test';
import { bootGame } from './helpers/setup.js';

test.beforeEach(async ({ page }) => {
  await bootGame(page);
});

test('track menu [Desert 5]', async ({ page }) => {
  test.setTimeout(300_000);
  
  const leaderboardResponse = page.waitForResponse(
    res => res.url().includes('/leaderboard') && res.status() === 200,
    { timeout: 60_000 }
  );

  await test.step('navigate to track menu', async () => {
    await page.getByRole('button', { name: 'Play', exact: true }).click();
    const desert5div = page.locator('div').filter({ hasText: /^Desert 52\/14\/2026No record$/ });
    await expect(desert5div).toBeVisible();
    await expect(page.locator('.tracks-container.open > div > .track')).toHaveCount(17);
    await desert5div.getByRole('button', { name: 'Desert 5' }).click();
  });

  const desert5menu = page.locator('.track-info-ui');

  await test.step('track info displays correctly', async () => {
    await expect(desert5menu).toBeVisible();
    await expect(desert5menu.locator('.side-panel h2').filter({ hasText: 'Desert 5' })).toBeVisible();
    await expect(desert5menu.locator('.track-author').filter({ hasText: 'Kodub' })).toBeVisible();
    await expect(desert5menu.locator('.last-modified').filter({ hasText: '2/14/2026 5:07 PM' })).toBeVisible();
    await expect(desert5menu.locator('.personal-best')).toBeVisible();
  });

  await test.step('action buttons in correct initial state', async () => {
    await expect(desert5menu.locator('.button.watch')).toBeVisible();
    await expect(desert5menu.locator('.button.watch')).toBeDisabled();
    await expect(desert5menu.locator('.button.play')).toBeVisible();
    await expect(desert5menu.locator('.button.play')).toBeEnabled();
    await expect(desert5menu.locator('.opponents-container.no-opponents')).toBeVisible();
  });

  await leaderboardResponse;

  await test.step('leaderboard shows 20 entries', async () => {
    await expect(desert5menu.locator('.leaderboard-ui > .container button.main')).toHaveCount(20);
  });

  const firstOpponent = desert5menu.locator('.leaderboard-ui > .container button.main').first();

  await test.step('first leaderboard entry has correct structure', async () => {
    await expect(firstOpponent).toBeVisible();
    await expect(firstOpponent).not.toHaveClass('button main selected');
    await expect(firstOpponent.locator('.position')).toHaveText('1st');
    await expect(firstOpponent.locator('.verified-state.verified')).toBeVisible();
    await expect(firstOpponent.locator('.run-id-text')).toBeVisible();
  });

  await test.step('selecting opponent enables watch button', async () => {
    await firstOpponent.click();
    await expect(firstOpponent).toHaveClass('button main selected');
    await expect(desert5menu.locator('.button.watch')).toBeEnabled();
  });
  
  await desert5menu.locator('.button.watch').click();

  const timeBar = page.locator('.time-bar-ui');
  const toolBar = page.locator('.preview-toolbar-ui');
  const inputOverlay = page.locator('.input-visualizer-ui');
  const checkpointUI = page.locator('.checkpoint-ui');
  const speedometerUI = page.locator('.speedometer-ui');
  const timerUI = page.locator('.timer-ui');

  await test.step('watching replay shows playback UI', async () => {
    await expect(timeBar).toBeVisible();
    await expect(toolBar).toBeVisible();
    await expect(inputOverlay).toBeVisible();
    await expect(checkpointUI).toBeVisible();
    await expect(speedometerUI).toBeVisible();
    await expect(timerUI).toBeVisible();
  });

  await test.step('check graphs menu', async () => {
    await expect(page.locator('.graph-ui')).toBeHidden();
    await page.getByRole('button', { name: 'Graphs' }).click();
    const graphUI = page.locator('.graph-ui');
    await expect(graphUI).toBeVisible();
    await expect(graphUI).not.toHaveClass('graph-ui type-selection-open');
    await graphUI.getByRole('button', { name: 'Speed (km/h)' }).click();
    await expect(graphUI).toHaveClass('graph-ui type-selection-open');
    await graphUI.getByRole('button', { name: ' Close' }).click();
    await expect(graphUI).toBeHidden();
  });

  await test.step('exiting replay goes to gameplay menu', async () => {
    await toolBar.getByRole('button', { name: 'Back' }).click();
    await expect(timeBar).toBeHidden();
    await expect(toolBar).toBeHidden();
    await expect(inputOverlay).toBeHidden();
    await expect(checkpointUI).toBeVisible();
    await expect(speedometerUI).toBeVisible();
    await expect(timerUI).toBeVisible();
  });

  const drivingToolbar = page.locator('.game-toolbar-ui.visible.up');

  await test.step('minimap toggle', async () => {
    const minimap = page.locator('.track-preview-container');
    await expect(minimap).toBeVisible();
    await expect(minimap).toHaveClass('track-preview-container');
    await drivingToolbar.getByRole('button', { name: 'Minimap' }).click();
    await expect(minimap).toHaveClass('track-preview-container closed');
    await drivingToolbar.getByRole('button', { name: 'Minimap' }).click();
    await expect(minimap).toHaveClass('track-preview-container');
  });

  await test.step('exiting to track menu', async () => {
    await drivingToolbar.getByRole('button', { name: 'Exit' }).click();

    const desert5div = page.locator('div').filter({ hasText: /^Desert 52\/14\/2026No record$/ });
    await expect(desert5div).toBeVisible();

    await expect(page.locator('.tracks-container.open > div > .track')).toHaveCount(17);
  });
});