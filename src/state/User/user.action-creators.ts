//importing types
import { ActionType } from './user.action-types';
import { CurrentUser } from '../interfaces';
import { Dispatch } from 'redux';
import { CurrentUserAction } from './user.actions';
//importing firebase utils
import { auth, GoogleProvider, handleUserProfile } from '../../firebase/utils';
//action creators
export const emailSignInStart = (userCredentials: any) => {
  return {
    type: ActionType.EMAIL_SIGN_IN_START,
    payload: userCredentials,
  };
};
export const signInSuccess = (user: any) => {
  return {
    type: ActionType.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const setCurrentUser = (user: CurrentUser | null) => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};
export const signInUser = (email: string, password: string) => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  //signing user in
  try {
    await auth.signInWithEmailAndPassword(email, password);
    //sign in sucess
    dispatch({
      type: ActionType.SIGN_IN_SUCCESS,
      payload: {
        status: true,
        err: '',
      },
    });
  } catch (err) {
    //sign in error
    dispatch({
      type: ActionType.SIGN_IN_ERROR,
      payload: {
        status: false,
        err: err.message,
      },
    });
  }
};
export const signUpUser = (
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
) => async (dispatch: Dispatch<CurrentUserAction>) => {
  //validation
  const err: string[] = [];
  if (password !== confirmPassword) {
    err.push("Passwords didn't match. Please try again");
  }
  if (password.length < 6) {
    err.push('Password length must be at least 6 characters');
  }
  if (password.length > 15) {
    err.push('Password length must not exceed 15 characters');
  }
  if (!password || !displayName || !email || !confirmPassword) {
    err.push('One or more fields are missing. Please try again');
  }
  //dispatching errors
  dispatch({
    type: ActionType.SIGN_UP_ERROR,
    payload: {
      status: false,
      err,
    },
  });
  if (err.length > 0) {
    return;
  }
  //submitting and creating user's account
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //saving user to db
    await handleUserProfile(user, { displayName });
    //success
    dispatch({
      type: ActionType.SIGN_UP_SUCCESS,
      payload: {
        status: true,
        err: [],
      },
    });
  } catch (error) {
    dispatch({
      type: ActionType.SIGN_UP_ERROR,
      payload: {
        status: false,
        err: [...err, error.message],
      },
    });
  }
};
export const recoverPassword = (email: string) => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  try {
    //sending instructions on password recovery
    await auth.sendPasswordResetEmail(email, {
      url: 'http://localhost:3000/login',
    });
    //success
    dispatch({
      type: ActionType.PASSWORD_RECOVERY_SUCCESS,
      payload: {
        status: true,
        err: '',
      },
    });
  } catch (err) {
    //error
    dispatch({
      type: ActionType.PASSWORD_RECOVERY_ERROR,
      payload: {
        status: false,
        err: err.message,
      },
    });
  }
};
export const signInWithGoogle = () => async (
  dispatch: Dispatch<CurrentUserAction>
) => {
  try {
    //signing in with google
    await auth.signInWithPopup(GoogleProvider);
    //success
    dispatch({
      type: ActionType.SIGN_IN_SUCCESS,
      payload: {
        status: true,
        err: '',
      },
    });
  } catch (err) {
    //error
    dispatch({
      type: ActionType.SIGN_IN_ERROR,
      payload: {
        status: false,
        err: '',
      },
    });
  }
};
export const resetAuthForms = () => {
  return {
    type: ActionType.RESET_AUTH_FORMS,
  };
};
