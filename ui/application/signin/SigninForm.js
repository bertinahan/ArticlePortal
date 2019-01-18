import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Form} from 'semantic-ui-react';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <Form.Field
    error={touched && error}
  >
      <label>{label}</label>
      <input {...custom} />
  </Form.Field>
)

const SigninForm = ({handleSubmit, onSubmit}) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="email"
        component={renderTextField}
        label="Email"
      />
      <Field
        name="password"
        component={renderTextField}
        label="Password"
        type="password"
      />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default reduxForm({form: 'signin'})(SigninForm);
