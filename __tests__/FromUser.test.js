/**
 * @format
 */

import 'react-native';
import React from 'react';
import FromUser from '../App/Components/FromUser';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<FromUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
