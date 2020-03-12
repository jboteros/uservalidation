import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Themes';
export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    zIndex: 200,
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
    zIndex: 50,
    width: Metrics.screenWidth,
    height: '100%',
    resizeMode: 'cover',
  },

  accentImage: {
    zIndex: 100,
    width: Metrics.screenWidth,
    height: '100%',
    resizeMode: 'cover',
  },
  mask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.yellowMask(0.7),
    opacity: 0.5,
  },
  contentHeader: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  footer: {
    flex: 0,
    width: '90%',
    flexDirection: 'row',
    paddingBottom: Metrics.addFooter + 20,
    alignSelf: 'center',
  },
  itemFooter: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: Metrics.borderRadius,
  },

  shadows: {
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 5,
  },

  welcomeTitle: {
    ...Fonts.style.bold(Colors.dark, Fonts.size.h5, 'center'),
  },

  welcomeText: {
    ...Fonts.style.regular(Colors.dark, Fonts.size.medium, 'center'),
    width: '80%',
    marginVertical: 20,
  },
});
