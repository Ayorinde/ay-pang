import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import './app.css';

import Products from './pages/products';
import Navbar from './components/navbar';
import Cart from './components/cart';

import {cache} from './cache';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: cache
});

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
