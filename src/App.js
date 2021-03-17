import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';
import './app.css';


import Products from './pages/products';
import Navbar from './components/navbar';
import Cart from './components/cart';

import {cache} from './cache';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: cache
});

client
  .query({
    query: gql`
    query getProducts{
      products{
        id
        title
        image_url
        price(currency: USD)
      }
    }
    `
  })
  .then(result => console.log(result));


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Navbar />
        <Cart />
        <Products />
      </div>
    </ApolloProvider>
  );
}

export default App;
