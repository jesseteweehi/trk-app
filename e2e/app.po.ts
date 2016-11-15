import { browser, element, by } from 'protractor';

export class TrkAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('trk-root h1')).getText();
  }
}
