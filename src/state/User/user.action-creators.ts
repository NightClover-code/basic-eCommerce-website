//importing types
import { ActionType } from './user.action-types';
import { CurrentUser, EmailPassword, UserCredentials } from '../interfaces';
//importing firebase utils
import { auth, GoogleProvider } from '../../firebase/utils';
import { CurrentUserAction } from './user.actions';
//action creators
export const emailSignInStart = (
  userCredentials: EmailPassword
): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user: CurrentUser | null): CurrentUserAction => ({
  type: ActionType.SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignOutStart = (): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_OUT_START,
});

export const signOutSuccess = (): CurrentUserAction => ({
  type: ActionType.SIGN_OUT_SUCCESS,
  payload: null,
});

export const emailSignUpStart = (
  userCredentials: UserCredentials
): CurrentUserAction => ({
  type: ActionType.EMAIL_SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (user: CurrentUser | null): CurrentUserAction => ({
  type: ActionType.SIGN_UP_SUCCESS,
  payload: user,
});

export const checkUserSession = (): CurrentUserAction => ({
  type: ActionType.CHECK_USER_SESSION,
});

export const resetAuthForms = (): CurrentUserAction => ({
  type: ActionType.RESET_AUTH_FORMS,
});

export const recoverPasswordStart = (email: string): CurrentUserAction => ({
  type: ActionType.PASSWORD_RECOVERY_START,
  payload: email,
});

export const recoverPasswordSuccess = (): CurrentUserAction => ({
  type: ActionType.PASSWORD_RECOVERY_SUCCESS,
});

export const signInWithGoogle = (): CurrentUserAction => {
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

export const userError = (err: string[]) => ({
  type: ActionType.USER_ERROR,
  payload: err,
});
