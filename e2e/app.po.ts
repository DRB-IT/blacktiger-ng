export class BlacktigerNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blacktiger-ng-app h1')).getText();
  }
}
