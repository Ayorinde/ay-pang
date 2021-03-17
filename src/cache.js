import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read () {
            return cartItemsVar();
          }
        },
        showCart: {
          read () {
            return showCartVar();
          }
        }
      }
    }
  }
});

export const cartItemsVar = makeVar([]);
export const showCartVar = makeVar(true);
