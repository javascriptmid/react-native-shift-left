#!/usr/bin/env bash

set -e

#########################
# Required by android
#########################

# Install sdk tools
# Thus Android Studio is unnecessary now.
if [ ! -f "$ANDROID_HOME/tools/bin/sdkmanager" ]; then
  echo "\nDownloading android sdkManager...\n"
  mkdir -p ${ANDROID_HOME}
  sdk_tools_name='sdk-tools-darwin-4333796.zip'
  rm -f ${sdk_tools_name}
  # TODO: set china specially env.
  curl -O https://dl.google.com/android/repository/${sdk_tools_name}
  unzip ${sdk_tools_name} -d ${ANDROID_HOME}

  echo "SdkManager has been installed."
fi

# This file may not exist.
mkdir -p $HOME/.android
touch $HOME/.android/repositories.cfg
# Accept all licences, so the program will not ask again.
yes | sdkmanager --licenses

# TODO: add mirror for china.
# Channel number: 0 (Stable), 1 (Beta), 2 (Dev), 3 (Canary)
sdk_manager_options='--no_https --verbose --channel=0'

# RN version required.
for package_name in "extras;intel;Hardware_Accelerated_Execution_Manager" "platform-tools" "emulator" "ndk-bundle" "platforms;android-28" "system-images;android-28;google_apis;x86_64" "build-tools;28.0.3"
do
  echo "\nInstalling package \033[32m${package_name}\033[0m. Wait patiently...\n"
  sdkmanager "$package_name" ${sdk_manager_options}
  echo "\nInstalled.\n"
done

sdkmanager --update ${sdk_manager_options}
