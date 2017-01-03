import { ApplinkNgPage } from './app.po';

describe('applink-ng App', function() {
  let page: ApplinkNgPage;

  beforeEach(() => {
    page = new ApplinkNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
