import { RouteComponentProps } from 'react-router';

//currentUser
export interface CurrentUser {
  email: string;
  displayName: string;
  id: string;
}
//router props
export interface PropsWithRouter extends RouteComponentProps<any> {}
