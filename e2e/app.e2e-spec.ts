import { Angular4FirebaseStarterPage } from './app.po';

describe('angular4-firebase-starter App', function() {
  let page: Angular4FirebaseStarterPage;

  beforeEach(() => {
    page = new Angular4FirebaseStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
