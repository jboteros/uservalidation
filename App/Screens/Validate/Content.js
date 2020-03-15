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

import {Colors, Fonts, Images, Metrics} from '../../Themes';

import styles from './styles';
import FormUser from '../../Components/FormUser';
import metrics from '../../Themes/Metrics';

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
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
    this.setState({user});
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

  async actionSetNewProspect() {
    const {setNewProspect, navigation} = this.props;
    try {
      setNewProspect(false);
      navigation.navigate('Prospects');
    } catch (error) {
      console.warn('setNewProspect:error', error);
    }
  }
  render() {
    const {navigation, isProspect} = this.props;

    return (
      <View testID={'validateScreen'} style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.imageContainer}>
              <Image source={Images.imageGreen} style={styles.image} />
              <Image source={Images.accentGreen} style={styles.accentImage} />
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                testID={'backValidate'}
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
                'Completa el siguiente formulario para validar el perfil de riesgo del usuario'
              }
            </Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={styles.KeyboardAvoidingView}>
            <ScrollView style={styles.formContainer}>
              <FormUser
                testID={'formUser'}
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

        {isProspect && this.state.user && (
          <View style={styles.prospectContainer}>
            <View style={styles.prospect}>
              <Text
                style={[
                  Fonts.style.bold(Colors.dark, Fonts.size.h6, 'center'),
                  {marginTop: 10},
                ]}>
                Prospecto valido
              </Text>
              <Text
                style={[
                  Fonts.style.regular(Colors.dark, Fonts.size.medium, 'center'),
                  {marginVertical: 10, marginHorizontal: 20},
                ]}>
                El usuario {this.state.user.firstName}{' '}
                {this.state.user.lastName} es un prospecto valido.
              </Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  this.actionSetNewProspect();
                }}>
                <Text
                  style={Fonts.style.bold(
                    Colors.light,
                    Fonts.size.medium,
                    'center',
                  )}>
                  Ir a prospectos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}
