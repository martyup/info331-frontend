import { EvntPage } from './app.po';

describe('evnt App', function() {
  let page: EvntPage;

  beforeEach(() => {
    page = new EvntPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
