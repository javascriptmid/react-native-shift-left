import config from './config';

const URL = {
  local: '127.0.0.1',
  remote: 'http://hub-cloud.browserstack.com/wd/hub',
};

const port = {
  local: 4723,
  remote: null,
};

export default {
  url: URL[config.E2E_SERVER],
  port: port[config.E2E_SERVER],
};
