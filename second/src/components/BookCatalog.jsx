import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './BookCatalog.css';

const BookCatalog = ({ cartItems, onCartAction }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(books);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        const formattedBooks = data.slice(0, 10).map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body,
          author: `Автор ${post.id}`,
          price: Math.floor(Math.random() * 2000) + 10,
        }));
        setBooks(formattedBooks);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className='loading'>Загрузка книг...</div>;

  return (
    <div className='catalog'>
      {books.map((book) => (
        <BookCard
          key={book.id}
          {...book}
          isInCart={cartItems.some((item) => item.id === book.id)}
          onCartAction={() => onCartAction(book)}
        />
      ))}
    </div>
  );
};

export default BookCatalog;
