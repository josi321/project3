import { Project3Page } from './app.po';

describe('project3 App', function() {
  let page: Project3Page;

  beforeEach(() => {
    page = new Project3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
