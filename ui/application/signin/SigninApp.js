import React from 'react';
import {Grid, Header} from 'semantic-ui-react';
import {SigninForm} from './Signin';

const SigninApp = ({onSubmit}) => {
  return (
    <Grid columns='equal' verticalAlign='middle' centered stretched>
      <Grid.Column />
      <Grid.Column stretched width={4}>
        <Header size='huge'>Sign in</Header>
        <SigninForm onSubmit={onSubmit} />
      </Grid.Column>
      <Grid.Column />
    </Grid>
  )
};

export default SigninApp;
