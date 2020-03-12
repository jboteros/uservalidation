/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading, getDeviceInfo} from '../../Core/UI/Actions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
