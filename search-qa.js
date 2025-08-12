import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.qa.com');
  await page.waitForSelector('input[type="search"], input[name*="search"], input[aria-label*="Search"]', { timeout: 5000 });
  await page.fill('input[type="search"], input[name*="search"], input[aria-label*="Search"]', 'QA Automation');
  await page.press('input[type="search"], input[name*="search"], input[aria-label*="Search"]', 'Enter');

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  await browser.close();
})();
