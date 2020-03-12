/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading, getDeviceInfo} from '../../Core/UI/Actions';
import {setUser, getRandomUser} from '../../Core/Prospects/Actions';

const mapStateToProps = ({ui, prospects}) => {
  const {loading, deviceInfo} = ui;
  const {users} = prospects;

  return {
    loading,
    deviceInfo,
    users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getDeviceInfo: () => dispatch(getDeviceInfo()),
    setUser: user => dispatch(setUser(user)),
    getRandomUser: () => dispatch(getRandomUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
