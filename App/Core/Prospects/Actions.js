import {SET_USER} from './Types';
import {Alert} from 'react-native';
import {NavigationActions} from 'react-navigation';
import * as Globals from '../../Helpers/Globals';
export const setUser = user => async (dispatch, navigation) => {
  let id = parseInt(user.id);

  //FIXME: Add navigator system
  if (validateId(id) && validateJudicialBackground(id)) {
    let score = validateScore();
    if (score >= 60) {
      let userData = {...user, ranking: score, id: Globals.create_UUID()};
      return dispatch({type: SET_USER, payload: userData});
    } else {
      Alert.alert(
        'Alerta',
        `El usuario ingresado no cumple con el puntaje necesario para poseer productos\n\n${user.firstName} ${user.lastName}\n${score}%`,
        [
          {
            text: 'Revisar formulario',
          },
          {
            text: 'Cancel',
            onPress: () => dispatch(NavigationActions.navigate('Home')),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  } else {
    //FIXME: Add navigator system
    Alert.alert(
      'Alerta',
      'El usuario ingresado no cumple las politicas de la compañia\n\nEl sistema no logra identificar su documento o el usuario posee antecedentes judiciales',
      [
        {
          text: 'Revisar formulario',
        },
        {
          text: 'Cancel',
          onPress: () => dispatch(NavigationActions.navigate('Home')),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
};

const validateId = id => {
  if (id % 2) {
    return true;
  } else {
    return false;
  }
};
const validateJudicialBackground = id => {
  if (id % 2) {
    return true;
  } else {
    return false;
  }
};

const validateScore = () => {
  let random = Math.floor(Math.random() * 100) + 1;
  return random;
};
