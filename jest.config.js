'use strict';

const jestPreset = require('@testing-library/react-native/jest-preset');
const {defaults} = require('jest-config');

module.exports = {
  preset: '@testing-library/react-native',
  clearMocks: true,
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  setupFilesAfterEnv: [
    ...jestPreset.setupFiles,
    '@testing-library/react-native/cleanup-after-each',
    '<rootDir>/enzyme.config.js',
  ],

  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  testMatch: ['**/tests/**/*.js?(x)', '**/(*.)(test).js?(x)'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },

  modulePathIgnorePatterns: [
    '<rootDir>/__tests__/utils',
    '<rootDir>/__tests__/data',
    '<rootDir>/storybook',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  moduleDirectories: ['node_modules', 'components'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    'node_modules/(?!(react-native|@testing-library|react-navigation|@react-navigation/.*|react-native-ui-kitten|react-native-linear-gradient|react-native-svg|@react-native-community/slider|react-native-camera|react-native-screens|react-navigation-stack|react-navigation-tabs|react-native-swipe-gestures|react-native-gesture-handler|react-native-safe-area-view|react-native-formik|react-native-root-siblings|react-native-modalbox|react-native-svg-charts|react-native-iphone-x-helper)/)',
    'node_modules/react-native-gesture-handler/jestSetup.js',
    '/node_modules/(?!react-native).+\\.js$',
    'node_modules/(?!(jest-)?react-native|@react-navigation).+\\.js',
    'node_modules/(?!static-container)',

    '<rootDir>/node_modules/(?!@babel/runtime)',
    '<rootDir>node_modules/(?!(react-native|__app__|react-native-button)/)',
    '/node_modules/(?!react-native)/.+',
    '/node_modules/',
  ],
};
