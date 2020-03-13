import React from 'react';
import {TouchableOpacity, Text, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {compose} from 'recompose';
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from 'react-native-formik';
import {TextField} from 'react-native-material-textfield';
import * as Yup from 'yup';

import Switch from '../Switch';
import {Colors, Fonts} from '../../Themes';

import styles from './styles.js';
const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput,
)(TextField);
const Form = withNextInputAutoFocusForm(ScrollView, {
  submitAfterLastInput: false,
});

Yup.setLocale({
  mixed: {
    required: 'Complete la información para continuar',
  },
  string: {
    email: 'Proporcione un correo electronico valido',
  },
  number: {},
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(),
  birthday: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),

  userPermissions: Yup.boolean()
    .required()
    .oneOf([true]),

  id: Yup.number().required(),
  idExpedition: Yup.string().required(),
});

export default ({validateUser}) => {
  return (
    <Formik
      onSubmit={values => {
        validateUser(values);
      }}
      validationSchema={validationSchema}
      initialValues={{userPermissions: false}}>
      {props => {
        return (
          <Form style={styles.formContainer}>
            <Text style={styles.titles}>{'Datos del usuario'}</Text>

            <MyInput label="Nombres" name="firstName" type="name" />
            <MyInput label="Apellidos" name="lastName" type="name" />

            <MyInput label="Correo electronico" name="email" type="email" />

            <Text style={styles.titles}>{'Identidad del usuario'}</Text>

            <MyInput label="Numero de documento" name="id" type="number" />

            <Switch
              label="¿El usuario esta informado sobre las politicas de habeas data?"
              name="userPermissions"
            />
            <TouchableOpacity
              onPress={props.handleSubmit}
              style={[
                styles.itemFooter,
                styles.shadows,
                {backgroundColor: Colors.accentGreen},
              ]}>
              <Text
                style={Fonts.style.bold(
                  Colors.light,
                  Fonts.size.medium,
                  'center',
                )}>
                {'Validar usuario'}
              </Text>
            </TouchableOpacity>
            {__DEV__ && <Text>{JSON.stringify(props, null, 2)}</Text>}
          </Form>
        );
      }}
    </Formik>
  );
};
