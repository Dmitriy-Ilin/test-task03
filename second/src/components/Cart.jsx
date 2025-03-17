import './Cart.css';

const Cart = ({ items, onRemoveItem }) => {
  return (
    <div className='cart-container'>
      <h2>Cart ({items.length})</h2>
      <ul className='cart-list'>
        {items.map((item) => (
          <li
            key={item.id}
            className='cart-item'
            onClick={() => onRemoveItem(item.id)}
          >
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
