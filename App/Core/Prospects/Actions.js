import {SET_USER} from './Types';
import {Alert} from 'react-native';

import {NavigationActions} from 'react-navigation';
import {setNewProspect} from '../UI/Actions';

import * as Globals from '../../Helpers/Globals';

export const setUser = user => async (dispatch, navigation) => {
  let id = parseInt(user.id);

  //FIXME: Add navigator system
  if (validateId(id) && validateJudicialBackground(id)) {
    let score = validateScore();

    if (score >= 60) {
      let userData = {...user, ranking: score, uid: Globals.create_UUID()};
      dispatch(setNewProspect(true));
      return dispatch({type: SET_USER, payload: userData});
    } else {
      Alert.alert(
        'Alerta',
        `El usuario ingresado no cumple con el puntaje necesario para poseer productos\n\n${user.firstName} ${user.lastName}\n${score}%`,
        [
          {
            text: 'Cancel',
            // onPress: () =>
            //   dispatch(NavigationActions.navigate({routeName: 'Prospects'})),

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
          text: 'Cancel',
          // onPress: () =>
          //   dispatch(NavigationActions.navigate({routeName: 'Prospects'})),

          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
};

export const goProspects = () => {
  const nav = NavigationActions.navigate({
    //Let's navigate to Main first
    routeName: 'Prospects',
    // and then go to BookList
    action: NavigationActions.navigate({routeName: 'Prospects'}),
  });
  return nav;
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

export const getRandomUser = () => async () => {
  try {
    let response = await fetch('https://randomuser.me/api/');
    let responseJson = await response.json();

    let user = responseJson.results[0];

    let data = {
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
      birthday: user.dob.date.slice(0, 10),
      userPermissions: true,
      uid: Globals.create_UUID(),
      id: Globals.randomId(),
    };

    return data;
  } catch (error) {
    console.error(error);
  }
};
