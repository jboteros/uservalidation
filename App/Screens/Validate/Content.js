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

export default class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      idType: -1,
      id: '',
    };
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
              <Text style={styles.titles}>{'Datos personales'}</Text>
              <MyTextInput
                title={'Nombres'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa nombres'}
                onChangeText={text => this.setState({firstName: text})}
                text={this.state.firstName}
              />
              <MyTextInput
                title={'Apellidos'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa apellidos'}
                onChangeText={text => this.setState({lastName: text})}
                text={this.state.lastName}
              />
              <MyTextInput
                title={'Fecha de nacimiento'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa la fecha de nacimiento'}
                onChangeText={text => this.setState({lastName: text})}
                text={this.state.lastName}
              />

              <Text style={styles.titles}>{'Documento de identidad'}</Text>
              <MyTextInput
                title={'Tipo de documento'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={
                  'Cedula de ciudadania, cedula extranjera, diplomatico, etc...'
                }
                onChangeText={text => this.setState({idType: text})}
                text={this.state.idType}
              />
              <MyTextInput
                title={'Numero documento'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa el numero de documento'}
                onChangeText={text => this.setState({id: text})}
                text={this.state.id}
              />
              <MyTextInput
                title={'Fecha de expedicion'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa la fecha de expedicion del documento'}
                onChangeText={text => this.setState({lastName: text})}
                text={this.state.lastName}
              />
              <Text style={styles.titles}>{'Datos de contacto'}</Text>

              <MyTextInput
                title={'Telefono'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa un numero de contacto'}
                onChangeText={text => this.setState({firstName: text})}
                text={this.state.firstName}
              />
              <MyTextInput
                title={'Correo electronico'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa correo electronico'}
                onChangeText={text => this.setState({email: text})}
                text={this.state.email}
              />
              <MyTextInput
                title={'Dirección'}
                keyboardType={null}
                autoCapitalize={null}
                textContent={null}
                secureText={null}
                pHolder={'Ingresa una dirección'}
                onChangeText={text => this.setState({email: text})}
                text={this.state.email}
              />
              <View style={styles.separator} />
            </ScrollView>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Ups...', 'Funcionalidad en desarrollo');
              }}
              style={[
                styles.itemFooter,
                styles.shadows,
                {backgroundColor: Colors.accentGreen},
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
          </View>
        </View>
      </View>
    );
  }
}
