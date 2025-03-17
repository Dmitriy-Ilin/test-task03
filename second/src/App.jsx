import { useState } from 'react';
import BookCatalog from './components/BookCatalog';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartAction = (book) => {
    setCartItems((prev) => {
      const isInCart = prev.some((item) => item.id === book.id);
      return isInCart
        ? prev.filter((item) => item.id !== book.id)
        : [...prev, book];
    });
  };
  console.log(cartItems);

  return (
    <div className='app'>
      <Cart items={cartItems} />
      <BookCatalog cartItems={cartItems} onCartAction={handleCartAction} />
    </div>
  );
};

export default App;

