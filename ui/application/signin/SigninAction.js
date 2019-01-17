export const AFTER_SIGNIN = 'AFTER_SIGNIN';

export const changeSignin = (userPromise) => ({
  type: AFTER_SIGNIN,
  payload: userPromise,
});
