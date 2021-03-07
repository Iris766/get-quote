const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes?count';
  // try handel if any error
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quoteArray = Array.from(data);
    const randomNumber = Math.floor(Math.random() * quoteArray.length - 1);
    const quote = quoteArray[randomNumber];
    // console.log(quote);

    quoteText.innerText = quote.text;
    quoteAuthor.innerText = quote.author;
  } catch (error) {
    console.log('No Quote Found ' + error);
  }
}

getQuotes();

newQuoteBtn.addEventListener('click', getQuotes);