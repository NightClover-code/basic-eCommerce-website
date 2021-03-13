//importing types
import { ActionType } from './user.action-types';
import { CurrentUser, EmailPassword } from '../interfaces';
//action type
export type CurrentUserAction =
  | SetCurrentUserAction
  | SignInSuccessAction
  | SignInErrorAction
  | SignUpErrorAction
  | SignUpSuccessAction
  | SignUpSuccessAction
  | PassworsRecoveryErrorAction
  | PassworsRecoverySuccessAction
  | ResetAuthForms
  | EmailSignInStartAction
  | SignOutSuccesAction;
//action interfaces
export interface EmailSignInStartAction {
  type: ActionType.EMAIL_SIGN_IN_START;
  payload: EmailPassword;
}
interface SignInSuccessAction {
  type: ActionType.SIGN_IN_SUCCESS;
  payload: {
    user: CurrentUser | null;
    formError: string;
    requestError: string;
  };
}
interface SignInErrorAction {
  type: ActionType.SIGN_IN_ERROR;
  payload: {
    user: CurrentUser | null;
    formError: string;
    requestError: string;
  };
}
export interface SignOutSuccesAction {
  type: ActionType.SIGN_OUT_SUCCESS;
  payload: {
    user: CurrentUser | null;
    formError: string;
    requestError: string;
  };
}
interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: CurrentUser | null;
}
interface SignUpSuccessAction {
  type: ActionType.SIGN_UP_SUCCESS;
  payload: {
    status: boolean;
    err: string[];
  };
}
interface SignUpErrorAction {
  type: ActionType.SIGN_UP_ERROR;
  payload: {
    status: boolean;
    err: string[];
  };
}
interface PassworsRecoverySuccessAction {
  type: ActionType.PASSWORD_RECOVERY_SUCCESS;
  payload: {
    status: boolean;
    err: string;
  };
}
interface PassworsRecoveryErrorAction {
  type: ActionType.PASSWORD_RECOVERY_ERROR;
  payload: {
    status: boolean;
    err: string;
  };
}
interface ResetAuthForms {
  type: ActionType.RESET_AUTH_FORMS;
}
