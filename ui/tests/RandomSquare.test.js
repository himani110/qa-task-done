const { Driver , get  } = require('selenium-webdriver/chrome')
const {browser , geturl} = require('selenium-webdriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
//require('chromedriver')
//require('geckodriver')


const rootURL = 'http://localhost:3000/random-square'
const d = new Builder().forBrowser('chrome').build()
const waitUntilTime = 20000
let driver, el, actual, expected
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5



async function getElementById(id) {
    const el = await d.wait(until.elementLocated(By.id(id)), waitUntilTime)
    return await d.wait(until.elementIsVisible(el), waitUntilTime)
  }
  async function getElementByXPath(xpath) {
    const el = await d.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
    return await d.wait(until.elementIsVisible(el), waitUntilTime)
  }

describe('Random Square ', () => {
    
    afterEach(() => {
        d.quit();
      });


// Test Case 1 : Positive Test Case : To Calculate Random Square of 5
it('Rsqr_1', async () => {
    await d.get(rootURL)
    el = await getElementById('rsqrinput')
    el.sendKeys("5")
    el = await getElementById('rsqrbutton')
    el.click()
    el = await getElementById('rsqroutput')
    actual = await el.getText()
    expect(actual).toBe('Random Square Calculate is 0'||'Random Square Calculate is 1'||'Random Square Calculate is 4'||'Random Square Calculate is 9'||'Random Square Calculate is 16'||'Random Square Calculate is 25');
  })

  // Test Case 2 : Boundary Test Case : To Calculate Factorial of 0
  it('Rsqr_2', async () => {
    await d.get(rootURL)
    el = await getElementById('rsqrinput')
    el.sendKeys("10")
    el = await getElementById('rsqrbutton')
    el.click()
    el = await getElementById('rsqroutput')
    expect(actual).toBe('Random Square Calculate is 0'||'Random Square Calculate is 1')
  })

  // Test Case 3 : Boundary Test Case : To Calculate Factorial of 1
  it('Rsqr_3', async () => {
    await d.get(rootURL)
    el = await getElementById('rsqrinput')
    el.sendKeys("0")
    el = await getElementById('rsqrbutton')
    el.click()
    el = await getElementById('rsqroutput')
    actual = await el.getText()
    expect(actual).toBe('Random Square Calculate is 0');
  })

  // Test Case 4 : Boundary Test Case : To Calculate Factorial of 10
  it('Rsqr_4', async () => {
    await d.get(rootURL)
    el = await getElementById('rsqrinput')
    el.sendKeys("1")
    el = await getElementById('rsqrbutton')
    el.click()
    el = await getElementById('rsqroutput')
    actual = await el.getText()
    expect(actual).toBe('Random Square Calculate is 0'||'Random Square Calculate is 1'||'Random Square Calculate is 4'||'Random Square Calculate is 9'||'Random Square Calculate is 16'||'Random Square Calculate is 25'||'Random Square Calculate is 36'||'Random Square Calculate is 49'||'Random Square Calculate is 64'||'Random Square Calculate is 81'||'Random Square Calculate is 100');
  })

  // Test Case 5 : Boundary Test Case : To Calculate Factorial of 12 [number greater than 10] // No such condition - Should Work
  it('Rsqr_5', async () => {
    await d.get(rootURL)
    el = await getElementById('rsqrinput')
    el.sendKeys("12")
    el = await getElementById('rsqrbutton')
    el.click()
    el = await getElementById('rsqroutput')
    actual = await el.getText()
    expect(actual).toBe('Random Square Calculate is 0'||'Random Square Calculate is 1'||'Random Square Calculate is 4'||'Random Square Calculate is 9'||'Random Square Calculate is 16'||'Random Square Calculate is 25'||'Random Square Calculate is 36'||'Random Square Calculate is 49'||'Random Square Calculate is 64'||'Random Square Calculate is 81'||'Random Square Calculate is 100'||'Random Square Calculate is 121');
})
  })
