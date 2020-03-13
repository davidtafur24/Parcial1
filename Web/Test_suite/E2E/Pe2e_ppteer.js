const puppeteer = require('puppeteer');

async function test(){
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    
    const page = await browser.newPage();

//---------------Creating Browser---------------//
  
  await page.goto('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=es', { waitUntil: "networkidle0" });

//---------------Login---------------//

  await page.type('input[type="email"]',"myemail@example.com");
  await page.type('input[type="password"]',"asdeunaAF#");
  await page.click('input[type="checkbox"]');
  await page.click('button[class="submit_btn ist_button ist_button_red sel_login"]');
  await page.waitFor(7000);

//---------------Main Filters---------------//

  await page.click('li[id="filter_inbox"]');
  await page.waitFor(500);
  await page.click('a[class="action action_add_item"]');
  await page.click('button[class="cancel"]');
  await page.waitFor(1000);

  await page.click('li[id="filter_today"]');
  await page.waitFor(500);
  await page.click('a[class="action"]');
  await page.click('button[class="cancel"]');
  await page.waitFor(1000);
  
  await page.click('li[id="filter_7days"]');
  await page.waitFor(500);
  await page.click('a[class="action"]');
  await page.click('button[class="cancel"]');
  await page.waitFor(1000);

//---------------Proyectos--------------//

  await page.click('button[data-track="navigation|projects_panel"]');
  await page.waitFor(1000);

//---------------Labels---------------//

  await page.click('button[data-track="navigation|labels_panel"]');
  await page.waitFor(1000);
  await page.click('svg[xmlns="http://www.w3.org/2000/svg"]');
  await page.waitFor(1000);

//---------------Filters---------------//

  await page.click('button[data-track="navigation|filters_panel"]');
  await page.waitFor(1000);

//---------------Quick add---------------//

await page.click('span[data-track="navigation|quick_add"]');
await page.waitFor(1000);
await page.click('button[aria-label="Cerrar"]');
await page.waitFor(1000);

//---------------Productivity---------------//

await page.click('span[data-track="navigation|karma"]');
await page.waitFor(1000);
await page.click('div[id="left_menu"]');
await page.waitFor(1000);

//---------------Settings---------------//

  await page.click('span[id="gear_holder"]');
  await page.waitFor(1000);

//---------------Logout---------------//

  await page.evaluate(() => {
    let elements = document.getElementsByClassName('usermenu__container');
    for (let element of elements)
        element.childNodes[15].click();
  });

  await page.waitFor(5000);

  await browser.close();
}

test();