const books = [
  { title: 'Книга 1', price: 100 },
  { title: 'Книга 2', price: 200 },
  { title: 'Книга 3', price: 500 },
];

const filterBooks = (array) => {
  return array.filter((book) => book.price < 400);
};

console.log(filterBooks(books));

const startTimer = (duration) => {
  let timer = duration;
  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer & 60;

    console.log(
      `До конца акции: ${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`,
    );

    if (--timer < 0) {
      clearInterval(interval);
      console.log('Акция завершена');
    }
  }, 1000);
};

startTimer(600);

const cart = [];
const cartElement = document.getElementById('cart');

const updateCartDisplay = () => {
  cartElement.innerHTML = cart.length
    ? `<h3>Корзина:</h3><ul>${cart
        .map((book) => `<li>${book}</li>`)
        .join('')}</ul>`
    : '';

  cartElement.style.display = cart.length ? 'block' : 'none';
};

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', (e) => {
    const card = e.target.closest('.book-card');
    const title = card.querySelector('.book-title').innerHTML;

    cart.push(title);
    updateCartDisplay();
  });
});
