const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1000, height: 800});
  await page.goto('https://www.megaphone.services/');
  await page.screenshot({path: 'screenshot.png'});

  await browser.close();
})();
