import { IntelligoPage } from './app.po';

describe('intelligo App', () => {
  let page: IntelligoPage;

  beforeEach(() => {
    page = new IntelligoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
