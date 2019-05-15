import { asserters } from 'wd';

import driver from './driver';

export default async function waitForElement(key, tag, timeout = 5000) {
  function waitFor() {
    if (tag) {
      return driver.waitForElement(
        tag,
        key,
        asserters.isDisplayed,
        timeout,
        100
      );
    }

    return driver.waitForElementByAccessibilityId(
      key,
      asserters.isDisplayed,
      timeout,
      100
    );
  }

  try {
    const existingElement = await waitFor();
    return existingElement;
  } catch {
    return undefined;
  }
}
