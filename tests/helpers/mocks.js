// Default Desert 5 leaderboard with 20 verified entries
function defaultLeaderboardData() {
  const baseFrames = 29065;
  const entries = Array.from({ length: 20 }, (_, i) => ({
    id: 10000000 + i,
    userId: `mock-user-${i.toString().padStart(2, '0')}${'0'.repeat(58)}`.slice(0, 64),
    nickname: `MockPlayer${i + 1}`,
    countryCode: i % 3 === 0 ? 'us' : null,
    carStyle: 'AAAAAP___wAAAAAAAP___w',
    frames: baseFrames + i * 5,
    time: '2026-05-22T21:31:15.000Z',
    verifiedState: 1,
  }));

  return {
    total: 243466,
    entries,
    userEntry: null,
  };
}

/**
 * Mock the /v6/leaderboard endpoint. Call before any action that triggers the request
 * @param {import('@playwright/test').Page} page
 * @param {object} [options]
 * @param {object} [options.data] - Override the entire response body
 * @param {string} [options.trackId] - Only mock requests for this trackId; otherwise mock all
 */
export async function mockLeaderboard(page, { data, trackId } = {}) {
  const body = JSON.stringify(data ?? defaultLeaderboardData());

  await page.route('**/v6/leaderboard*', async route => {
    const url = new URL(route.request().url());
    if (trackId && url.searchParams.get('trackId') !== trackId) {
      return route.fallback();
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body,
    });
  });
}


function defaultRecording() {
  return {
    recording: 'eNo1kcsuQ2EUhb_Ti4aIkEZScQsDVBGJuNOqKkVLi6JRbV0jIi5JZ0YiJh7AwMTEqxiIgUcgMfAa9lmJk5M_-9__3mutvbYf93vvJebh00vEIQUJDx1QhUG40HkD7cpEoAKjcAT9lnRohrcAUcjCKuzCEqzBNuRhEXLKZNXr62MZ-mooQgbisA47MAwHMKt4TsUzusZ05nRuwCR0OnTDax1hPwVh3ge5hiEJG4Fbw4ekhyd1GfW4MI23AYpBJryUmziHSwjDFUxA2edSf_TQ7dAe4gse4SXgPi2L12yZkjCbfeE_Y3Qras_o1cYfg5Jqtmq5gwcPSfk2IA9tzGONVlU85acVniXDRkjgTmRQ-7LR9GzpavEmfDe6jIaclL15caUUL-lfUUtJBWeOa-w0nMK8BFek2QpsU4fyJCUlhtMFNXXuxn8cQtBaSz38-tzenKxLCyGhbaaVKWjetCg2hJZRXJAbBencc2iRgLD0xyXSFlrU66Uqt3WmBBIVSEzJ-D_vjjJlgZuGM2iDE7Hb9wfeZ0bJ',
    frames: 29065,
    verifiedState: 1,
    carStyle: 'AA4AABMTEAMDAwAAAAAAAA',
  };
}

/**
 * Mock the /v6/recordings endpoint. The response is an array of recordings
 * matching the requested IDs.
 *
 * @param {import('@playwright/test').Page} page
 * @param {object} [options]
 * @param {object[]} [options.recordings] - Override the recordings list
 */
export async function mockRecording(page, { recordings } = {}) {
  const data = recordings ?? [defaultRecording()];

  await page.route('**/v6/recordings*', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(data),
    });
  });
}