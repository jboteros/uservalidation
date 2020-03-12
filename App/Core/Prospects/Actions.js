import {SET_USER} from './Types';
import {Alert} from 'react-native';
import {NavigationActions} from 'react-navigation';

export const setUser = user => async (dispatch, navigation) => {
  let id = parseInt(user.id);

  //FIXME: Add navigator system
  if (validateId(id) && validateJudicialBackground(id)) {
    let score = validateScore();
    if (score >= 60) {
      let userData = {...user, ranking: score};
      return dispatch({type: SET_USER, payload: userData});
    } else {
      Alert.alert(
        'Alerta',
        `El usuario ingresado no cumple con el puntaje necesario para poseer productos\n\n${user.firstName} ${user.lastName}\n${score}%`,
        [
          {
            text: 'Revisar formulario',
            onPress: () => console.log('review'),
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
          onPress: () => console.log('review'),
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
  console.log('validateId', id, id % 2);
  if (id % 2) {
    return true;
  } else {
    return false;
  }
};
const validateJudicialBackground = id => {
  console.log('validateJudicialBackground', id, id % 2);
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
