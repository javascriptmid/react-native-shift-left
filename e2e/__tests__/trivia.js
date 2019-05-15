import driver from '../driver';
import capabilities from '../capabilities';

import waitForElement from '../waitForElement';

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

describe('HomeScreen', () => {
  beforeAll(async () => {
    await driver.init(capabilities);
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should load the app', async () => {
    const homeScreen = await waitForElement('home-screen');
    expect(homeScreen).not.toBeUndefined();
  });

  it('should start the trivia', async () => {
    const startPlayingButton = await waitForElement('start-playing-button');
    expect(startPlayingButton).not.toBeUndefined();

    await driver.tapElement(startPlayingButton);

    const triviaScreen = await waitForElement('trivia-screen');
    expect(triviaScreen).not.toBeUndefined();
  });
});
