## Initialize
Everyone must run this script at first.
```bash
node scripts/init
```

## Coding
We have prepared everything for you. You just need run script below:
```bash
yarn start
```

## Build app
Before build app, you should create signature for android
```bash
  sh scripts/build/android-signature.sh
```
Before build app, you should create personal certificate and upload to [apple developer](https://developer.apple.com/account/ios/certificate). Or create by xcode automatically.

And then you can build

```bash
sh scripts/build/archive.sh
```

## Upload to App Store
You can use Xcode -> Product -> Archive, and click `Upload to App Store` when complete.

Also, you can use shell script.

```bash
sh scripts/build/archive.sh && sh scripts/build/upload-app-store.sh
```

In this way, you should override teamID in file `ios/exportOptions/app-store.plist`, go to [apple developer](https://developer.apple.com/account/ios/identifier/bundle) to fetch the keyword named: Prefix
