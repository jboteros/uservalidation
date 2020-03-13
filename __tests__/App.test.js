import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
} from 'react-native';
import renderer from 'react-test-renderer';
import App from '../App';
import {shallow} from 'enzyme';

jest.setTimeout(15000);

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Using Jest + Enzyme
describe('<App />', () => {
  it('renders correctly, test using Jest + Enzyme', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

// These serve as integration tests for the jest-react-native preset.
it('renders the ActivityIndicator component', () => {
  const tree = renderer
    .create(<ActivityIndicator animating={true} size="small" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the Image component', done => {
  Image.getSize('path.jpg', (width, height) => {
    const tree = renderer.create(<Image style={{height, width}} />).toJSON();
    expect(tree).toMatchSnapshot();
    done();
  });
});

it('renders the TextInput component', () => {
  const tree = renderer
    .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the FlatList component', () => {
  const tree = renderer
    .create(
      <FlatList
        data={['apple', 'banana', 'kiwi']}
        keyExtractor={item => item}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
