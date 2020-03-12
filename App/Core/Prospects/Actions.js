import {SET_USER} from './Types';

export const setUser = () => async dispatch => {
  let data = [
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Billy',
        last: 'Ramirez',
      },
      location: {
        street: {
          number: 5286,
          name: 'Manchester Road',
        },
        city: 'Portsmouth',
        state: 'Tyne and Wear',
        country: 'United Kingdom',
        postcode: 'P3V 9AU',
        coordinates: {
          latitude: '14.3682',
          longitude: '-114.8571',
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca',
        },
      },
      email: 'billy.ramirez@example.com',
      login: {
        uuid: '1b786ae2-50e4-4752-8e7d-dc368ca4b8c0',
        username: 'heavyswan864',
        password: 'tomas',
        salt: 'tc3qBukU',
        md5: 'f07868c2dff19044256074c962022915',
        sha1: '4ad3ca00c53943fb4d35b1fc6cbf26d0efda5443',
        sha256:
          '57cdcb0d7e1eea7b34bca9077b6a2ef86e1b233c83b50acec4040615e9f64f2a',
      },
      dob: {
        date: '1986-06-19T21:05:24.795Z',
        age: 34,
      },
      registered: {
        date: '2006-07-25T07:54:02.453Z',
        age: 14,
      },
      phone: '013873 22513',
      cell: '0753-577-795',
      id: {
        name: 'NINO',
        value: 'PX 51 93 82 M',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/41.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/41.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/41.jpg',
      },
      nat: 'GB',
    },
  ];

  return dispatch({type: SET_USER, payload: data});
};
