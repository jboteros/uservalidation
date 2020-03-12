import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

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
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={Images.coupleHome} style={styles.image} />
          <View style={styles.mask}/>
        </View>
        <View style={styles.content}>
          <Text
            style={Fonts.style.semiBold(Colors.dark, Fonts.size.h6, 'center')}>
            {'Welcome screen'}
          </Text>
        </View>
      </View>
    );
  }
}
