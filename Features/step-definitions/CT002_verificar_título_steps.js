const {Given, When, Then, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');


//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const {By} = require('selenium-webdriver');
const { verify } = require('crypto');
var options   = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

    Given('que fulano visita a página inicial do Mercado Livre', {timeout: 30 * 1000}, async () => {  
        await driver.get("https://www.mercadolivre.com.br/")
        await driver.manage().window().setRect({ width: 1366, height: 728 })
    });


    When('ele verifica o título da página', {timeout: 30 * 1000}, async () => {
        await driver.findElement(By.css(".andes-carousel-snapped__slide--active > a > img")).click()
    });

    Then('confirma o resultado', {timeout: 30 * 1000}, async () => {
        assert(await driver.findElement(By.linkText("Mercado Livre Brasil - Onde comprar e vender de Tudo")).getText() == "Mercado Livre Brasil - Onde comprar e vender de Tudo")
        await driver.close()
  });
        
    


    
    