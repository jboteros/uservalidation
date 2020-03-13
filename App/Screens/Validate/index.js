/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading, getDeviceInfo, setNewProspect} from '../../Core/UI/Actions';
import {setUser} from '../../Core/Prospects/Actions';
const mapStateToProps = ({ui}) => {
  const {loading, deviceInfo, isProspect} = ui;

  return {
    loading,
    deviceInfo,
    isProspect,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: state => dispatch(setLoading(state)),
    getDeviceInfo: () => dispatch(getDeviceInfo()),
    setUser: user => dispatch(setUser(user)),
    setNewProspect: state => dispatch(setNewProspect(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
