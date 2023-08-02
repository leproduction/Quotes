let quotes = document.querySelector('.quotes');
let btn = document.querySelector('#btn');
let author = document.querySelector('.author'); 

let quotesList = [{
  author: "William Shakespeare",
  quotes: "A rose by any other name would smell as sweet."
}, {
  author: "John Kennedy",
  quotes: "Ask not what your country can do for you; ask what you can do for your country."
}, {author:"Pablo Picasso", quotes:"“Every child is an artist. The problem is how to remain an artist once he grows up." }];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotesList.length);
  quotes.innerText = quotesList[random].quotes;
  author.innerText = quotesList[random].author; 
});
