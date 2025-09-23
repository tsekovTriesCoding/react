import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';

import Cart from './components/Cart/Cart.js';
import Layout from './components/Layout/Layout.js';
import Products from './components/Shop/Products.js';
import { uiActions } from './store/ui-slice.js';
import Notification from './components/UI/Notification.js';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart); // to listen for changes in cart state
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })
      );

      const response = await fetch('https://react-http-39cdb-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      })
      );
    }); // catch any error from sendCartData
  }, [cart, dispatch]); // run this effect whenever cart state changes

  return (
    <Fragment>
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
