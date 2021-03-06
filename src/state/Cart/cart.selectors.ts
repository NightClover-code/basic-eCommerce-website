//importing selector
import { createSelector } from 'reselect';
//importing types
import { RootState } from '../reducers';
//Selectors
export const selectCartData = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartData],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((qty, cartItem) => {
      return qty + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((qty, cartItem) => {
    return qty + cartItem.quantity * cartItem.price;
  }, 0)
);
