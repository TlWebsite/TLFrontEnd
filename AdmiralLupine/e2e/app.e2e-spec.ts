import { AdmiralLupinePage } from './app.po';

describe('admiral-lupine App', () => {
  let page: AdmiralLupinePage;

  beforeEach(() => {
    page = new AdmiralLupinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
