import { TicTacPage } from './app.po';

describe('tic-tac App', function() {
  let page: TicTacPage;

  beforeEach(() => {
    page = new TicTacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
