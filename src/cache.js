import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read () {
            return cartItemsVar();
          }
        }
      }
    }
  }
});

export const cartItemsVar = makeVar([]);
