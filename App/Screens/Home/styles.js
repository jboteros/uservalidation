import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: Metrics.addHeader,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.yellowMask(0.7),
  },
});
