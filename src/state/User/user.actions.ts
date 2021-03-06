//importing types
import { ActionType } from './user.action-types';
import { CurrentUser, EmailPassword, UserCredentials } from '../../interfaces';
//action type
export type CurrentUserAction =
  | SignInSuccessAction
  | SignUpSuccessAction
  | PasswordRecoverySuccessAction
  | SignOutSuccessAction
  | EmailSignInStartAction
  | EmailSignUpStartAction
  | EmailSignOutStartAction
  | CheckUserSessionAction
  | PasswordRecoveryStartAction
  | UserErrorsAction
  | GoogleSignInStartAction
  | GoogleSignInSuccessAction
  | ResetUserStateAction;

//start action interfaces
export interface EmailSignInStartAction {
  type: ActionType.EMAIL_SIGN_IN_START;
  payload: EmailPassword;
}
export interface EmailSignUpStartAction {
  type: ActionType.EMAIL_SIGN_UP_START;
  payload: UserCredentials;
}
interface EmailSignOutStartAction {
  type: ActionType.EMAIL_SIGN_OUT_START;
}
interface GoogleSignInStartAction {
  type: ActionType.GOOGLE_SIGN_IN_START;
}
export interface PasswordRecoveryStartAction {
  type: ActionType.PASSWORD_RECOVERY_START;
  payload: string;
}

//success action interfaces
interface GoogleSignInSuccessAction {
  type: ActionType.GOOGLE_SIGN_IN_SUCCESS;
  payload: CurrentUser | null;
}

interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: CurrentUser | null;
}
interface SignOutSuccessAction {
  type: ActionType.SIGN_OUT_SUCCESS;
  payload: CurrentUser | null;
}

interface SignUpSuccessAction {
  type: ActionType.SIGN_UP_SUCCESS;
  payload: CurrentUser | null;
}
interface PasswordRecoverySuccessAction {
  type: ActionType.PASSWORD_RECOVERY_SUCCESS;
  payload: boolean;
}

//error action interfaces
interface UserErrorsAction {
  type: ActionType.USER_ERROR;
  payload: string[];
}

//other action interfaces
interface CheckUserSessionAction {
  type: ActionType.CHECK_USER_SESSION;
}
interface ResetUserStateAction {
  type: ActionType.RESET_USER_STATE;
}
