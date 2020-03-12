import React from 'react';
import {Text, Switch as RNSwitch, View} from 'react-native';
import {withFormikControl} from 'react-native-formik';
import styles from './styles';
import {Colors} from '../../Themes';

class Switch extends React.PureComponent {
  render() {
    const {error, value, setFieldValue, label} = this.props;

    return (
      <View style={styles.container}>
        <RNSwitch
          value={value}
          trackColor={{true: Colors.accentGreen, false: Colors.gray}}
          ios_backgroundColor={error ? 'red' : 'transparent'}
          onValueChange={setFieldValue}
        />
        <Text style={styles.text}>{label}</Text>
      </View>
    );
  }
}

export default withFormikControl(Switch);
