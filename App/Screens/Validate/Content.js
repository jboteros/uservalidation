import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import MyTextInput from '../../Components/MyTextInput';
import {Colors, Fonts, Images} from '../../Themes';

import styles from './styles';
import FormUser from '../../Components/FormUser';

export default class Validate extends Component {
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

  async actionSetUser(user) {
    const {setUser} = this.props;
    await setUser(user);
  }
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.imageContainer}>
              <Image source={Images.imageGreen} style={styles.image} />
              <Image source={Images.accentGreen} style={styles.accentImage} />
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.itemHeader}>
                <Image source={Images.back} style={styles.smallBtn} />
              </TouchableOpacity>
            </View>
            <Text style={styles.welcomeTitle}>{'Validar usuario'}</Text>
            <Text style={styles.welcomeText}>
              {
                'Completa el siguiente formulario para validar el prefil de riesgo del usuario'
              }
            </Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={styles.KeyboardAvoidingView}>
            <ScrollView style={styles.formContainer}>
              <FormUser
                validateUser={user => {
                  this.actionSetUser(user);
                }}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
