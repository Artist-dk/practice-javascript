const { test, expect } = require('@playwright/test');

test('LocateMultipleElements', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    const links = await page.$$('a')
    for(const link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    }
})