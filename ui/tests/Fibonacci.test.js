const { Driver , get  } = require('selenium-webdriver/chrome')
const {browser , geturl} = require('selenium-webdriver')
const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
//require('chromedriver')
//require('geckodriver')


const rootURL = 'http://localhost:3000/fibonacci'
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

describe('Fibonacci  ', () => {
    afterEach(() => {
        d.quit();
      });


// Test Case 1 : Positive Test Case : To Calculate Fibonacci of 8
it('Fibonacci_1', async () => {
    await d.get(rootURL)
    el = await getElementById('fibinput')
    el.sendKeys("8")
    el = await getElementById('fibbutton')
    el.click()
    el = await getElementById('fiboutput')
    actual = await el.getText()
    expect(actual).toBe('Fibonacci(n) of 8 is 21');
  })

  // Test Case 2 : Boundary Test Case : To Calculate Fibonacci of 10
  it('Fibonacci_2', async () => {
    await d.get(rootURL)
    el = await getElementById('fibinput')
    el.sendKeys("10")
    el = await getElementById('fibbutton')
    el.click()
    el = await getElementById('factoutput')
    expect(actual).toBe('Fibonacci(n) of 10 is 55');
  })

  // Test Case 3 : Boundary Test Case : To Calculate Fibonacci of 0
  it('Fibonacci_3', async () => {
    await d.get(rootURL)
    el = await getElementById('fibinput')
    el.sendKeys("0")
    el = await getElementById('fibbutton')
    el.click()
    el = await getElementById('fiboutput')
    actual = await el.getText()
    expect(actual).toBe('Fibonacci(n) of 0 is 0');
  })

  // Test Case 4 : Boundary Test Case : To Calculate Fibonacci of 1
  it('Fibonacci_4', async () => {
    await d.get(rootURL)
    el = await getElementById('fibinput')
    el.sendKeys("1")
    el = await getElementById('fibbutton')
    el.click()
    el = await getElementById('fiboutput')
    actual = await el.getText()
    expect(actual).toBe('Fibonacci(n) of 1 is 1');
  })

  // Test Case 5 : Boundary Test Case : To Calculate Fibonacci of 12 [number greater than 10]
  it('Fibonacci_5', async () => {
    await d.get(rootURL)
    el = await getElementById('fibinput')
    el.sendKeys("12")
    el = await getElementById('fibbutton')
    el.click()
    el = await getElementById('fiboutput')
    actual = await el.getText()
    expect(actual).toBe('Error');
  })
})
