import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Form} from 'semantic-ui-react';

const SigninForm = ({handleSubmit, onSubmit}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({form: 'signin'})(SigninForm);
