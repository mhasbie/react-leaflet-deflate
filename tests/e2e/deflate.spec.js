const { test, expect } = require('@playwright/test');

async function zoomTo12(page) {
  const zoomOutput = page.getByTestId('zoom');

  for (let zoom = 5; zoom <= 12; zoom += 1) {
    await page.locator('.leaflet-control-zoom-in').click();
    await expect(zoomOutput).toHaveText(String(zoom));
  }
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Deflate fixture' })).toBeVisible();
});

test('deflates small features and opens their feature popup when zoomed in', async ({ page }) => {
  await expect(page.locator('.leaflet-marker-icon')).toHaveCount(1);
  await zoomTo12(page);

  const features = page.locator('.leaflet-interactive');
  await expect(features).toHaveCount(3);
  await features.first().click();
  await expect(page.locator('.leaflet-popup-content')).toContainText('Feature #1');
});

test('toggles marker clustering on the map', async ({ page }) => {
  const clusterCheckbox = page.getByRole('checkbox', { name: 'Marker clustering' });
  await expect(clusterCheckbox).toBeChecked();
  await expect(page.locator('.marker-cluster')).toBeVisible();

  await clusterCheckbox.uncheck();

  await expect(page.locator('.marker-cluster')).toHaveCount(0);
  await expect(page.locator('.leaflet-marker-icon')).toHaveCount(3);
});

test('applies minimum-size and data-set changes', async ({ page }) => {
  await zoomTo12(page);
  await expect(page.locator('.leaflet-interactive')).toHaveCount(3);

  await page.getByRole('spinbutton', { name: 'Minimum size' }).fill('1000');
  await expect(page.locator('.leaflet-marker-icon')).toHaveCount(3);

  await page.getByRole('combobox', { name: 'GeoJSON data set' }).selectOption('2');
  await expect(page.getByTestId('dataset')).toHaveText('Data set 2');
  await expect(page.locator('.leaflet-marker-icon')).toHaveCount(1);
});
