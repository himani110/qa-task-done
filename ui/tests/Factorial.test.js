const { Driver , get  } = require('selenium-webdriver/chrome')
const {browser , geturl} = require('selenium-webdriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
//require('chromedriver')
//require('geckodriver')


const rootURL = 'http://localhost:3000/factorial'
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

describe('Factorial  ', () => {
    afterEach(() => {
        d.quit();
      });


// Test Case 1 : Positive Test Case : To Calculate Factorial of 6
it('Factorial_1', async () => {
    await d.get(rootURL)
    el = await getElementById('factinput')
    el.sendKeys("6")
    el = await getElementById('factbutton')
    el.click()
    el = await getElementById('factoutput')
    actual = await el.getText()
    expect(actual).toBe('Factorial of 6 is 720');
  })

  // Test Case 2 : Boundary Test Case : To Calculate Factorial of 10
  it('Factorial_2', async () => {
    await d.get(rootURL)
    el = await getElementById('factinput')
    el.sendKeys("10")
    el = await getElementById('factbutton')
    el.click()
    el = await getElementById('factoutput')
    expect(actual).toBe('Factorial of 10 is 3628800');
  })

  // Test Case 3 : Boundary Test Case : To Calculate Factorial of 0
  it('Factorial_3', async () => {
    await d.get(rootURL)
    el = await getElementById('factinput')
    el.sendKeys("0")
    el = await getElementById('factbutton')
    el.click()
    el = await getElementById('factoutput')
    actual = await el.getText()
    expect(actual).toBe('Factorial of 0 is 0');
  })

  // Test Case 4 : Boundary Test Case : To Calculate Factorial of 1
  it('Factorial_4', async () => {
    await d.get(rootURL)
    el = await getElementById('factinput')
    el.sendKeys("1")
    el = await getElementById('factbutton')
    el.click()
    el = await getElementById('factoutput')
    actual = await el.getText()
    expect(actual).toBe('Factorial of 1 is 1');
  })

  // Test Case 5 : Boundary Test Case : To Calculate Factorial of 12 [number greater than 10]
  it('Factorial_5', async () => {
    await d.get(rootURL)
    el = await getElementById('factinput')
    el.sendKeys("12")
    el = await getElementById('factbutton')
    el.click()
    el = await getElementById('factoutput')
    actual = await el.getText()
    expect(actual).toBe('Error');
  })
})
