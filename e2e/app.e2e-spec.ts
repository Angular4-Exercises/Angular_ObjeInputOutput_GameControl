import { GameControlPage } from './app.po';

describe('game-control App', () => {
  let page: GameControlPage;

  beforeEach(() => {
    page = new GameControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
