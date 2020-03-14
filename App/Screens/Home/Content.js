import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Colors, Fonts, Images} from '../../Themes';

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const {getDeviceInfo, setLoading} = this.props;

    setLoading(true);
    await getDeviceInfo();
    setLoading(false);
  }
  render() {
    const {navigation} = this.props;

    return (
      <View testID={'homeScreen'} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.imageYellow} style={styles.image} />
          <Image source={Images.accentImage} style={styles.accentImage} />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text testID={'title'} style={styles.welcomeTitle}>
              {'Validador de usuarios'}
            </Text>
            <Text testID={'subtitle'} style={styles.welcomeText}>
              {
                'Ingresa la información del usuario a consultar y evaluamos el perfil de riesgo'
              }
            </Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              testID={'validate'}
              onPress={() => {
                navigation.navigate('Validate');
              }}
              style={[
                styles.itemFooter,
                styles.shadows,
                {backgroundColor: Colors.accentBlue},
              ]}>
              <Text
                style={Fonts.style.bold(
                  Colors.light,
                  Fonts.size.medium,
                  'center',
                )}>
                {'Validar usuario'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              testID={'prospect'}
              onPress={() => {
                navigation.navigate('Prospects');
              }}
              style={[
                styles.itemFooter,
                styles.shadows,
                {backgroundColor: Colors.light},
              ]}>
              <Text
                style={Fonts.style.bold(
                  Colors.accentBlue,
                  Fonts.size.medium,
                  'center',
                )}>
                {'Ver prospectos'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
