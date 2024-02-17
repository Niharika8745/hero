const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function ms() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.manage().window().maximize();
    await driver.get("https://www.msn.com/en-us/shopping/product?pid=59454539834");
    let a1 = await driver
      .findElement(
        By.xpath(
          '//*[@id="root"]/div/div/fluent-design-system-provider/div/div[2]/div/shopping-page-base'
        )
      )
      .getShadowRoot();
    let a2 = await a1.findElement(
      By.css(
        ".shopping-page-base-root > .shopping-page-content > shopping-product-detail-page"
      )
    );
    let a3 = await a2.getShadowRoot();
    let a4 = await a3.findElement(By.css(".productDetailPage"));
    let a5 = await a4.getShadowRoot();
    let a6 = await a5.findElement(By.css("msn-shopping-product-bullseye"))
    let a7 = await a6.getShadowRoot()
    let a8 = await a7.findElement(
      By.css(
        '.product-bullseye-container > .product-bullseye > .product > .gallery-and-product-info > .product-info > .product-price > .product-price-new'
      )
    );
    console.log(await a8.getText());
    
    await driver.quit()
  } catch (e) {
    console.log(e.message);
  }
})();
