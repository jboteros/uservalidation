import {device, expect, element, by, waitFor} from 'detox';

describe('AppNavigation', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('homeScreen'))).toBeVisible();
    await expect(element(by.id('title'))).toExist();
    await expect(element(by.id('subtitle'))).toExist;
  });

  it('waitFor home container', async () => {
    await waitFor(element(by.id('homeScreen')))
      .toExist()
      .withTimeout(2000);

    await expect(element(by.id('homeScreen'))).toExist();
  });

  it('navigate to validate', async () => {
    await waitFor(element(by.id('validate')))
      .toExist()
      .withTimeout(2000);
    await element(by.id('validate')).tap();
  });
});

describe('validate flow form', () => {
  it('validate screen successfully', async () => {
    await waitFor(element(by.id('validateScreen')))
      .toExist()
      .withTimeout(2000);

    waitFor(element(by.id('formUser'))).toExist();

    waitFor(element(by.id('firstName'))).toExist();
    await element(by.id('firstName')).typeText('Johnatan');

    waitFor(element(by.id('lastName'))).toExist();
    await element(by.id('lastName')).typeText('Botero');

    waitFor(element(by.id('email'))).toExist();
    await element(by.id('email')).typeText('johnatan@jbotero.com');

    waitFor(element(by.id('idTitle'))).toExist();

    try {
      waitFor(element(by.id('idDoc'))).toExist();
      await element(by.id('idDoc')).typeText('8355593');
    } catch (error) {
      console.log('error', error);
    }

    try {
      waitFor(element(by.id('userPermissions'))).toExist();
      await element(by.id('userPermissions')).tap();
    } catch (error) {
      console.log('error', error);
    }

    await element(by.id('backValidate')).tap();
  });
});

describe('prospects flow', () => {
  it('prospects screen successfully', async () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });

    await waitFor(element(by.id('prospect')))
      .toExist()
      .withTimeout(2000);
    await element(by.id('prospect')).tap();

    await waitFor(element(by.id('prospectScreen')))
      .toExist()
      .withTimeout(2000);

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    try {
      waitFor(element(by.id('randomGenerator'))).toExist();
      await element(by.id('randomGenerator')).tap();
      await element(by.text('Cancel')).tap();
    } catch (error) {
      // console.log('error:alert', error);
    }

    await waitFor(element(by.id('backProspects')))
      .toExist()
      .withTimeout(5000);
    await element(by.id('backProspects')).tap();
  });
});
