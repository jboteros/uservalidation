import React from 'react';
import DisableKeyboard from 'react-native-formik/src/withPickerValues/DisableKeyboard';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {TextField as MaterialTextInput} from 'react-native-material-textfield';
import moment from 'moment';
import 'moment/locale/es';
moment().locale('es');
class DatePicker extends React.PureComponent {
  state = {
    pickerOpened: false,
  };

  focus = () => this.openPicker();

  openPicker = () => {
    this.setState({pickerOpened: true});
  };

  closePicker = () =>
    this.setState({pickerOpened: false}, () => {
      this.props.setFieldTouched();
    });

  handleDatePicked = value => {
    let date = moment(value).format('LL');
    this.props.setFieldValue(date);
    this.forceUpdate();
    this.closePicker();
    // if (this.props.onSubmitEditing) this.props.onSubmitEditing();
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <DisableKeyboard onPress={this.openPicker}>
          <MaterialTextInput
            //TODO: fix update problem
            //FIXME: need force update after update date
            {...this.props}
            value={this.props.value ? this.props.value : undefined}
            label={this.props.value ? this.props.value : undefined}
          />
        </DisableKeyboard>
        <DateTimePicker
          isVisible={this.state.pickerOpened}
          onConfirm={this.handleDatePicked}
          onCancel={this.closePicker}
          {...this.props}
        />
      </React.Fragment>
    );
  }
}

export default DatePicker;
