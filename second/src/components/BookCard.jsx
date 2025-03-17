import './BookCard.css';

const BookCard = ({
  title,
  author,
  description,
  price,
  isInCart,
  onCartAction,
}) => {
  return (
    <div className='book-card'>
      <h3>{title}</h3>
      <p className='author'>Автор: {author}</p>
      <p className='description'>{description}</p>
      <div className='footer'>
        <span className='price'>Цена: {price}</span>
        <button
          className={`action-btn ${isInCart ? 'remove' : 'add'}`}
          onClick={onCartAction}
        >
          {isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
