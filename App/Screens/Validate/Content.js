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
    const {setUser, setLoading} = this.props;
    setLoading(true);
    await setUser(user);
    setLoading(false);
  }

  async actionGetRandomUser() {
    const {getRandomUser, setLoading, navigation} = this.props;
    setLoading(true);

    getRandomUser().then(user => {
      this.actionSetUser(user);
      navigation.navigate('Prospects');
      setLoading(false);
    });
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
                ref={nav => {
                  this.formUser = nav;
                }}
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
