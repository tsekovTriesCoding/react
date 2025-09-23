import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart.js';
import Layout from './components/Layout/Layout.js';
import Products from './components/Shop/Products.js';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); // to listen for changes in cart state

  useEffect(() => {
    fetch('https://react-http-39c.firebasedatabase.app/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    }).catch((error) => {
      console.error('Sending cart data failed.', error);
    });
  }, [cart]); // run this effect whenever cart state changes

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
