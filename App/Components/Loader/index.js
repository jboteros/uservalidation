/**
 * @format
 * @flow
 */
import React from 'react';
import {View} from 'react-native';
import {PacmanIndicator} from 'react-native-indicators';
import styles from './styles';
import {Colors} from '../../Themes';

export default data => {
  const {loading} = data;
  if (loading) {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: Colors.colorMask(0.7),
          },
        ]}>
        <PacmanIndicator color={Colors.accentBlue} />
      </View>
    );
  } else {
    return null;
  }
};
