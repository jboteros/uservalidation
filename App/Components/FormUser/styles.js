import {StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Themes';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: 'absolute',
  },
  itemFooter: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: Metrics.borderRadius,
  },
  titles: {
    marginTop: 40,
    marginBottom: 20,

    ...Fonts.style.bold(Colors.dark, Fonts.size.medium, 'center'),
  },
  formContainer: {width: '90%', alignSelf: 'center'},
});
