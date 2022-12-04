const data = [
  {
    quote: 'Underneath this flabby exterior is an enormous lack of character.',
    author: 'Oscar Levant',
  },
  {
    quote: 'One arrow alone can be easily broken but many arrows are indestructible.',
    author: 'Genghis Khan',
  },
  { quote: "Life isn't long enough for love and art.", author: 'William Somerset Maugham' },
  { quote: 'The shifts of Fortune test the reliability of friends.', author: 'Cicero' },
  { quote: 'Sincerity is the way of Heaven.', author: 'Mencius' },
  { quote: "The future ain't what it used to be.", author: 'Yogi Berra' },
  { quote: 'An unhurried sense of time is in itself a form of wealth.', author: 'Bonnie Friedman' },
  { quote: 'Success is never final.', author: 'Sir Winston Churchill' },
  { quote: 'Great loves too must be endured.', author: 'Gabriel Coco Chanel' },
  { quote: 'Love is, above all else, the gift of oneself.', author: 'Jean Anouilh' },
];

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const random_quote = data[Math.floor(Math.random() * data.length)];

quote.innerHTML = random_quote.quote;
author.innerHTML = '-' + random_quote.author;
