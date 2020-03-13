/**
 * @format
 */

import 'react-native';
import React from 'react';
import Switch from '../App/Components/Switch';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Switch />).toJSON();
  expect(tree).toMatchSnapshot();
});
