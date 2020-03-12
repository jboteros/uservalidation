/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading, getDeviceInfo} from '../../Core/UI/Actions';
import {setUser, getRandomUser} from '../../Core/Prospects/Actions';
const mapStateToProps = ({ui}) => {
  const {loading, deviceInfo} = ui;

  return {
    loading,
    deviceInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getDeviceInfo: () => dispatch(getDeviceInfo()),
    setUser: user => dispatch(setUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
