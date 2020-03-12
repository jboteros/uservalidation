import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './App/Core';
import Router from './App/Config/Router';
import Loader from './App/Components/Loader';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
    console.disableYellowBox = true;
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleChange);
    // persistor.purge();
    this.handleChange();
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange() {
    let loading = store.getState().ui.loading;

    this.setState({loading});
  }

  render() {
    const {loading} = this.state;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <Router
              ref={nav => {
                this.navigator = nav;
              }}
            />
            <Loader loading={loading} />
          </>
        </PersistGate>
      </Provider>
    );
  }
}
