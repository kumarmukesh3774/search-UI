import { AppPage } from './app.po';

<<<<<<< HEAD
describe('restaurant-angular App', () => {
=======
describe('search-component App', () => {
>>>>>>> 1943cc8a992dfe2d2e418562e27cdfe0b91a774d
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
