import { After, Before, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { Browser, chromium, Page } from 'playwright';

// Initialize the page and browser variables
let page: Page;
let browser: Browser;

setDefaultTimeout(60000); // Default timeout waits til promise resolves

// Create a ‘Before’ function to launch the chromium browser and assign the session id to the browser object.
Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        // Create a browser context and assign it to the page variable.
        const context = await browser.newContext();
        page = await context.newPage(); 
        await page.goto("https://www.demoblaze.com/"); // Navigate to URL
        console.log(`captured site title as ${await page.title()}`);
    }
    catch (error) {
        console.log(`chrome navigation to demo site failed due to ${error}`)
        throw new Error(`chrome navigation to demo site failed due to ${error}`)
    }
});

// Create an ‘After’ function and close the chromium browser using the browser reference created.
After(async function(Scenario) {
    if (Scenario.result!.status === Status.FAILED) {
        await this.attach(await page.screenshot({ path: `./Screenshots/${Scenario.pickle.name}.png`, fullPage: true}), "image/png");
    }
    await browser.close();
});

export { page, browser };
