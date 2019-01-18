import SigninForm from './SigninForm';
import SiginPage from './SigninPage';
import SigninReducer from './SigninReducer';
import {changeSignin} from './SigninAction';
import {connect} from 'react-redux';
import {RouteUtils} from '../utilities/utilites';

const mapDispatchToPropsSigninForm = (dispatch) => {
  return {
    onSubmit: async ({email, password}) => {
      const userResponse = await fetch(`${RouteUtils.apiPath}/auth`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });
      dispatch(changeSignin(userResponse.text()));
    }
  };
}

// const mapStateToPropsSigninForm = () => {
//   return
// }
const SigninFormContainer = connect(
  null,
  mapDispatchToPropsSigninForm,
  )(SigninForm);
export {
  SiginPage,
  SigninForm,
  SigninReducer,
  SigninFormContainer,
}
