# Users Validation

Validate a user's id and assign points to a prospect, React Native by Johntatan Botero (johnatan@jbotero.com)

## Main Funcionalities

#### List

- In process

## Setup

Install the complementary packages

```
yarn install
# or
npm install
```

Install pods

```
cd ios
pod install
# or
yarn pod
```

Run the project

```
react-native run-ios
# or
react-native run-Android
```

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

```
yarn ios
#or
yarn android
```

If use npm

```
npm run ios

#or
npm run android
```

## DETOX Test

ios

```
yarn e2e:ios
# or
detox build --configuration ios.sim.debug
detox test --configuration ios.sim.debug
```

android

```
e2e:android-debug
# or
detox build --configuration android.emu.debug
detox test --configuration android.emu.debug
```
