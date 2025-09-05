const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Believe you can and you're halfway there.",
  "Do not watch the clock. Do what it does. Keep going.",
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it."
];

let index = 0;
const quoteElement = document.getElementById('quote');

function showQuote() {
  quoteElement.style.opacity = 0; // fade out
  setTimeout(() => {
    quoteElement.textContent = quotes[index];
    quoteElement.style.opacity = 1; // fade in
    index = (index + 1) % quotes.length; // loop back
  }, 1000); // matches CSS transition
}

// Show first quote immediately
showQuote();

// Change quote every 5 seconds
setInterval(showQuote, 5000);
