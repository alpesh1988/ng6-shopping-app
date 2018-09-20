import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  const
    mediumSleepTime = 5000,
    smallSleepTime = 3000;

  beforeEach(() => {
    page = new AppPage();
    page.setBrowserToMaximize();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.waitForAngular();
    page.sleep(mediumSleepTime);
    expect(page.getParagraphText()).toEqual('Shopping application');
  });

  it('should type "sugar" in searchbox', () => {
    const searchbox = page.getSearchbox();
    searchbox.sendKeys('sugar');
    page.sleep(smallSleepTime);
  });
});
