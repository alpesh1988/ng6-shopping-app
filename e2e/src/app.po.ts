import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  setBrowserToMaximize() {
    return browser.driver.manage().window().maximize();
  }

  waitForAngular() {
    return browser.waitForAngularEnabled();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSearchbox() {
    return element(by.css('#alp-search-query'));
  }

  sleep(value) {
    return browser.driver.sleep(value);

  }
}
