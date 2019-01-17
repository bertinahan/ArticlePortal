import {AFTER_SIGNIN} from './SigninAction';
const signinInitial = {
  email: '',
  name: '',
};
function signinReducer(state = signinInitial, action) {
  const {type, payload} = action;
  switch(type) {
    case `${AFTER_SIGNIN}_FULFILLED`:
      return {...state, email: payload.email, name: payload.name}
    }
  return state;
}
export default signinReducer;
