import config from './config';

const capabilities = {
  local_ios: {
    nativeWebTap: true,
    platformName: 'iOS',
    platformVersion: 12.2,
    deviceName: 'iPhone X',
    app: 'ios/build/Build/Products/Debug-iphonesimulator/ShiftLeft.app',
    showXcodeLog: true,
    wdaLaunchTimeout: 9900000,
    wdaConnectionTimeout: 9900000,
    automationName: 'XCUITest',
  },
  local_android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'android/app/build/outputs/apk/debug/app-debug.apk',
  },
  remote_ios: {
    nativeWebTap: true,
    'browserstack.user': config.BROWSERSTACK_USERNAME,
    'browserstack.key': config.BROWSERSTACK_ACCESS_KEY,
    app: `${config.BROWSERSTACK_APP_URL}`,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    showXcodeLog: true,
    device: config.BROWSERSTACK_DEVICE,
    wdaLaunchTimeout: 9900000,
    wdaConnectionTimeout: 9900000,
    os_version: 12,
    name: 'iOS',
  },
  remote_android: {
    automationName: 'appium',
    'browserstack.user': config.BROWSERSTACK_USERNAME,
    'browserstack.key': config.BROWSERSTACK_ACCESS_KEY,
    app: `${config.BROWSERSTACK_APP_URL}`,
    'browserstack.debug': true,
    'browserstack.networkLogs': true,
    device: config.BROWSERSTACK_DEVICE,
    name: 'Android',
  },
};

export default capabilities[process.env.E2E_DEVICE];
