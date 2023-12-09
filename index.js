import './style.css';

const localQuotes = [
  {
    text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
  },
  
  
  {
    text: 'Nothing happens unless first we dream.',
    author: 'Carl Sandburg',
  },
  
  {
    text: 'Life is a learning experience, only if you learn.',
    author: 'Yogi Berra',
  },
  
  
  
  
  
  // Add more quotes as needed
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * localQuotes.length);
  return localQuotes[randomIndex];
};

const appDiv = document.getElementById('app');
const randomQuote = getRandomQuote();
appDiv.innerHTML = `
  <h1>JS Starter</h1>
  <blockquote>
    <p>${randomQuote.text}</p>
    <footer>${randomQuote.author}</footer>
  </blockquote>
`;

