import firebase from 'firebase/app';
import { doc, queryDoc } from './types';
//interfaces
export interface CurrentUser {
  email: string;
  displayName: string;
  id: string;
  userRoles: string[];
}
export interface EmailPassword {
  email: string;
  password: string;
}
export interface HandleUser {
  userAuth: firebase.User | null;
  moreData?: any;
}
export interface UserCredentials {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface FormOptions {
  name: string;
  value: string;
}
export interface ProductData {
  category: string;
  name: string;
  thumbnail: string;
  price: number;
  productAdminUserUID?: string;
  createdDate?: Date;
  documentId?: string;
}
export interface Products {
  data: ProductData[];
  queryDoc?: queryDoc | null;
  isLastPage: boolean;
}
export interface FetchProductsParams {
  filterType: string;
  startAfterDoc?: doc;
}
