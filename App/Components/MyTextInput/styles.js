import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Themes';
export default StyleSheet.create({
  textInput: {
    width: '90%',
    borderRadius: Metrics.borderRadius,
    alignSelf: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.textInputBg,
    height: 40,

    color: Colors.dark,
  },
  title: {
    ...Fonts.style.semiBold(Colors.dark, Fonts.size.small, 'left'),
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
});
