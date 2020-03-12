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
    flexDirection: 'row',
    alignSelf: 'center',
    paddingTop: Metrics.addHeader,
    // position: 'absolute',
    justifyContent: 'space-between',
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
    height: 40,
    paddingVertical: 15,
  },

  itemFooter: {
    flex: 1,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: Metrics.borderRadius,
  },

  shadows: {
    shadowColor: Colors.colorMask(0.25),
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.0,

    elevation: 2,
  },

  welcomeTitle: {
    ...Fonts.style.bold(Colors.light, Fonts.size.h5, 'center'),
  },

  welcomeText: {
    ...Fonts.style.regular(Colors.light, Fonts.size.medium, 'center'),
    width: '80%',
    marginVertical: 20,
  },
  titles: {
    marginVertical: 20,
    ...Fonts.style.bold(Colors.dark, Fonts.size.medium, 'center'),
  },
  separator: {marginVertical: 20},
  KeyboardAvoidingView: {flex: 1},

  userId: {
    ...Fonts.style.bold(Colors.dark, Fonts.size.h6, 'center'),
  },
  name: {
    ...Fonts.style.bold(Colors.dark, Fonts.size.medium, 'left'),
  },
  email: {
    ...Fonts.style.regular(Colors.gray, Fonts.size.medium, 'left'),
  },

  listUsers: {
    flex: 0,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    // paddingHorizontal: 20,
    backgroundColor: Colors.textInputBg,
    marginVertical: 5,
    flexDirection: 'row',
  },
  itemUser: {
    flex: 0,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: Colors.gray,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },

  statusUser: {
    flex: 0,
    marginHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: Colors.accentBlue,
    // width: 20,
    paddingHorizontal: 5,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },

  rankingText: {
    ...Fonts.style.semiBold(Colors.dark, Fonts.size.small, 'center'),
  },
  userDetailContainer: {
    flex: 1,
    alignSelf: 'center',

    marginVertical: 10,
    flexDirection: 'column',
  },
});
