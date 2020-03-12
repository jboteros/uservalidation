import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './styles';
import {Colors} from '../../Themes';

export default ({
  title,
  keyboardType,
  autoCapitalize,
  textContent,
  secureText,
  pHolder,
  onChangeText,
  text,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType={keyboardType}
        placeholderTextColor={Colors.gray}
        autoCapitalize={autoCapitalize}
        textContentType={textContent}
        secureTextEntry={secureText}
        placeholder={pHolder}
        style={styles.textInput}
        onChangeText={val => onChangeText(val)}
        value={text}
      />
    </View>
  );
};
