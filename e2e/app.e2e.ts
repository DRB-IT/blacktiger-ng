import { BlacktigerNgPage } from './app.po';

describe('blacktiger-ng App', function() {
  let page: BlacktigerNgPage;

  beforeEach(() => {
    page = new BlacktigerNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blacktiger-ng works!');
  });
});
