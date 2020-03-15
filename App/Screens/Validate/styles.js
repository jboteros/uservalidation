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
  },
  imageContainer: {
    zIndex: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  image: {
    zIndex: 50,
    width: Metrics.screenWidth,
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  smallBtn: {width: 30, height: 30, tintColor: Colors.light},
  accentImage: {
    zIndex: 100,
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  formContainer: {flex: 1},
  mask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.yellowMask(0.7),
    opacity: 0.5,
  },
  contentHeader: {
    flex: 0,

    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0,
    zIndex: 200,
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: Metrics.addHeader,
  },
  footer: {
    flex: 0,
    width: '90%',
    flexDirection: 'row',
    paddingBottom: Metrics.addFooter + 20,
    alignSelf: 'center',
  },
  itemHeader: {
    zIndex: 200,
    flex: 0,
    width: 40,
    height: 20,
    paddingVertical: 15,
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
    ...Fonts.style.bold(Colors.light, Fonts.size.h5, 'center'),
  },

  welcomeText: {
    ...Fonts.style.regular(Colors.light, Fonts.size.medium, 'center'),
    width: '80%',
    marginVertical: 10,
  },

  separator: {marginVertical: 20},
  KeyboardAvoidingView: {flex: 1},

  prospectContainer: {
    zIndex: 1000,
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.colorMask(0.7),
  },
  prospect: {
    width: Metrics.screenWidth * 0.8,

    borderRadius: 10,
    backgroundColor: Colors.light,
    position: 'absolute',
  },
  btn: {
    width: '90%',
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: Colors.accentGreen,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
