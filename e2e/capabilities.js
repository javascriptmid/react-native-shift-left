const capabilities = {
  ios: {
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
  android: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'android/app/build/outputs/apk/debug/app-debug.apk',
  },
};

export default capabilities[process.env.E2E_DEVICE];
