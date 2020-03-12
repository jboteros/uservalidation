import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import MyTextInput from '../../Components/MyTextInput';
import {Colors, Fonts, Images, Metrics} from '../../Themes';
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
  render() {
    const {navigation, prospects} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.imageContainer}>
              {/* <Image source={Images.imageGreen} style={styles.image} /> */}
              <Image source={Images.accentBlue} style={styles.accentImage} />
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
            <Text style={styles.welcomeTitle}>{'Visualizar prospectos'}</Text>
            <Text style={styles.welcomeText}>
              {'Puedes visualizar los prospectos utilizando los filtros'}
            </Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            enabled
            style={styles.KeyboardAvoidingView}>
            <View style={styles.formContainer}>
              <FlatList
                data={_.orderBy(prospects, 'dob.age', 'asc').reverse()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={[styles.listUsers, styles.shadows]}>
                      <View style={[styles.itemUser, styles.shadows]}>
                        <Text style={styles.userId}>
                          {item.name.first[0]}
                          {item.name.last[0]}
                        </Text>
                      </View>
                      <View style={styles.userDetailContainer}>
                        <Text style={styles.name}>
                          {item.name.first} {item.name.last}
                        </Text>
                        <Text style={styles.email}>{item.email}</Text>
                      </View>
                      <View
                        style={[
                          styles.statusUser,
                          styles.shadows,
                          {backgroundColor: Globals.perc2color(item.dob.age)},
                        ]}>
                        <Text style={styles.rankingText}>{item.dob.age}%</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={item => item.email}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
