/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading, getDeviceInfo} from '../../Core/UI/Actions';

const mapStateToProps = ({ui}) => {
  const {loading, deviceInfo} = ui;

  return {
    loading,
    deviceInfo,
    prospects: [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Sergio',
          last: 'Gutierrez',
        },
        location: {
          street: {
            number: 9648,
            name: 'Hamilton Ave',
          },
          city: 'Busselton',
          state: 'Australian Capital Territory',
          country: 'Australia',
          postcode: 441,
          coordinates: {
            latitude: '-82.3981',
            longitude: '-51.2065',
          },
          timezone: {
            offset: '+1:00',
            description: 'Brussels, Copenhagen, Madrid, Paris',
          },
        },
        email: 'sergio.gutierrez@example.com',
        login: {
          uuid: 'e57f5304-7f5c-4e10-aade-ba122c989bde',
          username: 'ticklishtiger753',
          password: 'ning',
          salt: 'C8wX4hcP',
          md5: 'a7eb2fc3f9166bd7236000f23c186fc3',
          sha1: '912e990763af0e2c0e49ab6c06cb5340280cf71b',
          sha256:
            'ede3c297789b34bcf1a11c3cd178399b2d62a9dd9b264113df76a474fe5430e4',
        },
        dob: {
          date: '1978-06-21T05:03:21.079Z',
          age: 42,
        },
        registered: {
          date: '2003-10-10T17:24:39.584Z',
          age: 17,
        },
        phone: '01-7555-7888',
        cell: '0466-135-581',
        id: {
          name: 'TFN',
          value: '591269998',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/15.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/15.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/15.jpg',
        },
        nat: 'AU',
      },
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Fatma',
          last: 'Marvik',
        },
        location: {
          street: {
            number: 2951,
            name: 'Pastor Fangens vei',
          },
          city: 'Bjølstad',
          state: 'Finnmark - Finnmárku',
          country: 'Norway',
          postcode: '0323',
          coordinates: {
            latitude: '61.2880',
            longitude: '37.1929',
          },
          timezone: {
            offset: '-7:00',
            description: 'Mountain Time (US & Canada)',
          },
        },
        email: 'fatma.marvik@example.com',
        login: {
          uuid: 'b2688e18-f23a-4eee-a0c9-58434a03fe1a',
          username: 'blueduck913',
          password: 'quattro',
          salt: '6fPzGmUT',
          md5: '94e7697c325f1a20131aea7b50f2749d',
          sha1: '74ea87649f38e5fbc1cd090bf44c5136569b6fd5',
          sha256:
            'ba465c3b98f8316616fc91877c1c71efba2e7715319291fca4098e8b108dd7e9',
        },
        dob: {
          date: '1989-05-15T16:02:03.048Z',
          age: 31,
        },
        registered: {
          date: '2011-09-03T19:48:29.573Z',
          age: 9,
        },
        phone: '75153321',
        cell: '48319280',
        id: {
          name: 'FN',
          value: '15058936607',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/39.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/39.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/39.jpg',
        },
        nat: 'NO',
      },
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Blake',
          last: 'Wood',
        },
        location: {
          street: {
            number: 6568,
            name: 'Church Street',
          },
          city: 'Edinburgh',
          state: 'Northumberland',
          country: 'United Kingdom',
          postcode: 'A0 1SU',
          coordinates: {
            latitude: '-16.9861',
            longitude: '9.1780',
          },
          timezone: {
            offset: '+4:30',
            description: 'Kabul',
          },
        },
        email: 'blake.wood@example.com',
        login: {
          uuid: '3bbb23ed-86c8-4285-a421-c52e4d040941',
          username: 'ticklishkoala632',
          password: 'boxer',
          salt: 'jb6yuuRo',
          md5: '0c277c5e5d14c3eca8fac66be3eb2ffd',
          sha1: 'ae75b3880cd5467439fb11314b3ea9d8eaed4b2b',
          sha256:
            '038c4fc25e3e41c9c62786141a694ded0b4d64c60ac2595af655df59f66c9bcb',
        },
        dob: {
          date: '1986-11-01T18:07:16.522Z',
          age: 34,
        },
        registered: {
          date: '2008-11-25T01:56:27.477Z',
          age: 12,
        },
        phone: '017683 50406',
        cell: '0720-170-155',
        id: {
          name: 'NINO',
          value: 'HK 46 17 71 C',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/79.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/79.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/79.jpg',
        },
        nat: 'GB',
      },
      {
        gender: 'female',
        name: {
          title: 'Mademoiselle',
          first: 'Nora',
          last: 'Bonnet',
        },
        location: {
          street: {
            number: 3326,
            name: "Rue de L'Abbaye",
          },
          city: 'Göschenen',
          state: 'Neuchâtel',
          country: 'Switzerland',
          postcode: 5742,
          coordinates: {
            latitude: '87.6930',
            longitude: '48.9214',
          },
          timezone: {
            offset: '+8:00',
            description: 'Beijing, Perth, Singapore, Hong Kong',
          },
        },
        email: 'nora.bonnet@example.com',
        login: {
          uuid: 'a24be20e-655b-432d-a9c6-c93332405fc1',
          username: 'beautifulostrich460',
          password: 'treasure',
          salt: '3Ru4WIC8',
          md5: '9e1ec57b0a12faea990ff4d681ac16be',
          sha1: 'c5b13fcb893dda180f9f8bd20248413a27a4beb9',
          sha256:
            '53b91c9eb0514925384459d7a72318b64fb97940ea9c6243d5f060255faf6259',
        },
        dob: {
          date: '1984-05-17T22:59:45.130Z',
          age: 36,
        },
        registered: {
          date: '2014-02-12T21:53:54.700Z',
          age: 6,
        },
        phone: '079 547 27 94',
        cell: '079 777 54 81',
        id: {
          name: 'AVS',
          value: '756.2784.9912.95',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/67.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/67.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/67.jpg',
        },
        nat: 'CH',
      },
      {
        gender: 'female',
        name: {
          title: 'Mrs',
          first: 'Alma',
          last: 'Møller',
        },
        location: {
          street: {
            number: 2499,
            name: 'Birkevang',
          },
          city: 'Randers Nv',
          state: 'Syddanmark',
          country: 'Denmark',
          postcode: 53219,
          coordinates: {
            latitude: '39.0823',
            longitude: '38.8505',
          },
          timezone: {
            offset: '+5:00',
            description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
          },
        },
        email: 'alma.moller@example.com',
        login: {
          uuid: '95c6a439-0b60-44d1-8987-657027170ee8',
          username: 'goldendog830',
          password: 'ferrari1',
          salt: 'zUHCnnbl',
          md5: '68b5d818a433060192c33cfa3002a1b6',
          sha1: 'b00a3b6966b14273b8527fe057c8d346ad64729a',
          sha256:
            'ca3bdcbf400b53ff891bb7d33078317c1f06cc9b490daf01de9a5db56fb4823a',
        },
        dob: {
          date: '1972-09-20T03:59:25.463Z',
          age: 48,
        },
        registered: {
          date: '2009-07-10T03:05:41.473Z',
          age: 11,
        },
        phone: '94278933',
        cell: '56042567',
        id: {
          name: 'CPR',
          value: '200972-5437',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/83.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/83.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
        },
        nat: 'DK',
      },
      {
        gender: 'female',
        name: {
          title: 'Ms',
          first: 'Sylvia',
          last: 'Andrews',
        },
        location: {
          street: {
            number: 2630,
            name: 'Parker Rd',
          },
          city: 'Hobart',
          state: 'New South Wales',
          country: 'Australia',
          postcode: 4166,
          coordinates: {
            latitude: '80.7659',
            longitude: '167.5282',
          },
          timezone: {
            offset: '+7:00',
            description: 'Bangkok, Hanoi, Jakarta',
          },
        },
        email: 'sylvia.andrews@example.com',
        login: {
          uuid: '2ec6fd1a-1ad9-4a15-9838-e3a59945e910',
          username: 'blueladybug313',
          password: 'jack',
          salt: 'WEB2ivOS',
          md5: 'eb508efff099f5f98951ab7ec7166c95',
          sha1: 'db43d79c3abd7997520ac40f5305ed11f3f5c65a',
          sha256:
            '23ece23627ba68b99aaa9d022e2799db5632be33c6217f89f70d4a1a2886769a',
        },
        dob: {
          date: '1969-03-23T11:17:57.294Z',
          age: 51,
        },
        registered: {
          date: '2006-12-07T23:06:19.322Z',
          age: 14,
        },
        phone: '09-7166-2594',
        cell: '0495-005-947',
        id: {
          name: 'TFN',
          value: '031183587',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/52.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/52.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
        },
        nat: 'AU',
      },
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Lucas',
          last: 'Jones',
        },
        location: {
          street: {
            number: 7357,
            name: 'College Ave',
          },
          city: 'Odessa',
          state: 'Yukon',
          country: 'Canada',
          postcode: 'H7M 8U7',
          coordinates: {
            latitude: '-36.2391',
            longitude: '-168.5018',
          },
          timezone: {
            offset: '+2:00',
            description: 'Kaliningrad, South Africa',
          },
        },
        email: 'lucas.jones@example.com',
        login: {
          uuid: '2c028800-2ac2-4f2a-8b66-3087688666c4',
          username: 'sadkoala563',
          password: 'passthie',
          salt: '0mpebRmY',
          md5: '9fc7818f4862b281fa9486b438848f70',
          sha1: 'ac94e954cea5a53c5f4764f7deb9f5b9728da017',
          sha256:
            '83693112b85262e7d9c57aa8b2b12fa93a15b16f1ef6ac672447df31d0ce2d88',
        },
        dob: {
          date: '1997-09-09T23:41:53.441Z',
          age: 87,
        },
        registered: {
          date: '2011-02-22T15:58:04.105Z',
          age: 9,
        },
        phone: '760-253-0286',
        cell: '629-132-4181',
        id: {
          name: '',
          value: null,
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/99.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/99.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/99.jpg',
        },
        nat: 'CA',
      },
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Stanislaw',
          last: 'Siegmund',
        },
        location: {
          street: {
            number: 9206,
            name: 'Marktplatz',
          },
          city: 'Calau',
          state: 'Hessen',
          country: 'Germany',
          postcode: 11699,
          coordinates: {
            latitude: '-18.9323',
            longitude: '91.2571',
          },
          timezone: {
            offset: '-10:00',
            description: 'Hawaii',
          },
        },
        email: 'stanislaw.siegmund@example.com',
        login: {
          uuid: '623814e6-a224-467a-acc3-13bc1bd5857d',
          username: 'greenfrog108',
          password: 'mickey',
          salt: 'jHtCuTVM',
          md5: 'b256a9606030d09a5de1995416687fb4',
          sha1: 'caa706b040d4d0df46bc4e2526f05fa0e9081c0f',
          sha256:
            '69a77abfa2f46afd1e0d2b9dc4194e375517585423d7f15de1f1736d6ba82fed',
        },
        dob: {
          date: '1981-07-06T19:55:12.598Z',
          age: 62,
        },
        registered: {
          date: '2016-12-28T14:34:42.120Z',
          age: 4,
        },
        phone: '0931-5582146',
        cell: '0179-4734186',
        id: {
          name: '',
          value: null,
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/11.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/11.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/11.jpg',
        },
        nat: 'DE',
      },
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Charlie',
          last: 'Rice',
        },
        location: {
          street: {
            number: 2476,
            name: 'E Pecan St',
          },
          city: 'Alexandria',
          state: 'Minnesota',
          country: 'United States',
          postcode: 87924,
          coordinates: {
            latitude: '68.8650',
            longitude: '70.3877',
          },
          timezone: {
            offset: '+1:00',
            description: 'Brussels, Copenhagen, Madrid, Paris',
          },
        },
        email: 'charlie.rice@example.com',
        login: {
          uuid: '5ec87fe0-a6ba-4b48-a87c-4ce7ebbc86e2',
          username: 'whiteswan678',
          password: 'squerting',
          salt: 'P926ntBE',
          md5: '7bc36b5ecdab287d4b2520a6d60c7767',
          sha1: '97b957fbcc24c325628a48f2ee2bbda5342d8ad6',
          sha256:
            '944d0aa7acb614c05ae42f19f0b91a7c8cd0cd26977864439cf3c72dd8b74299',
        },
        dob: {
          date: '1946-11-30T07:13:38.378Z',
          age: 74,
        },
        registered: {
          date: '2014-08-27T19:38:38.188Z',
          age: 6,
        },
        phone: '(086)-347-6789',
        cell: '(069)-188-7065',
        id: {
          name: 'SSN',
          value: '371-66-5258',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/89.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/89.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/89.jpg',
        },
        nat: 'US',
      },
    ],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getDeviceInfo: () => dispatch(getDeviceInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
