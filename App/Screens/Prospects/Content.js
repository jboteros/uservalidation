import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Images} from '../../Themes';
import _ from 'lodash';
import * as Globals from '../../Helpers/Globals';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

export default class Prospects extends Component {
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
    const {navigation, users} = this.props;

    return (
      <View testID={'prospectScreen'} style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.imageContainer}>
              {/* <Image source={Images.imageGreen} style={styles.image} /> */}
              <Image source={Images.accentBlue} style={styles.accentImage} />
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                testID={'backProspects'}
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.itemHeader}>
                <Image source={Images.back} style={styles.smallBtn} />
              </TouchableOpacity>
              <TouchableOpacity
                testID={'randomGenerator'}
                onPress={() => {
                  this.actionGetRandomUser();
                }}
                style={styles.itemHeader}>
                <Image source={Images.random} style={styles.smallBtn} />
              </TouchableOpacity>
            </View>
            <Text style={styles.welcomeTitle}>{'Lista de prospectos'}</Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={styles.KeyboardAvoidingView}>
            <View style={styles.formContainer}>
              <FlatList
                data={_.orderBy(users, 'dob.age', 'asc').reverse()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={[styles.listUsers, styles.shadows]}>
                      <View style={[styles.itemUser, styles.shadows]}>
                        <Text style={styles.userId}>
                          {item.firstName[0]}
                          {item.lastName[0]}
                        </Text>
                      </View>
                      <View style={styles.userDetailContainer}>
                        <Text style={styles.name}>
                          {item.firstName} {item.lastName}
                        </Text>
                        <Text style={styles.email}>{item.email}</Text>
                      </View>
                      <View
                        style={[
                          styles.statusUser,
                          styles.shadows,
                          {backgroundColor: Globals.perc2color(item.ranking)},
                        ]}>
                        <Text style={styles.rankingText}>{item.ranking}%</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={item => item.uid}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
