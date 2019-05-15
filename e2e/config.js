require('custom-env').env('e2e');

const {
  E2E_DEVICE,
  E2E_SERVER,
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY,
  BROWSERSTACK_APP_URL,
  BROWSERSTACK_DEVICE,
} = process.env;

const defaults = {
  E2E_DEVICE: null,
  E2E_SERVER: null,
};

// Alert to fill the necessary environment variables
Object.keys(defaults).forEach(key => {
  if (!process.env[key]) {
    throw new Error(
      `Please enter a custom ${key} in .env on the root directory`
    );
  }
});

export default {
  E2E_DEVICE,
  E2E_SERVER,
  BROWSERSTACK_USERNAME,
  BROWSERSTACK_ACCESS_KEY,
  BROWSERSTACK_APP_URL,
  BROWSERSTACK_DEVICE,
};
