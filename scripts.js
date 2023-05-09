/*
//Kanye-----------------------------
const KanyeQuote = () => {
  fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then(data => KanyedQuote(data))
}

const KanyedQuote = (data) => {
  const blockQuote = document
  .getElementById('quote1');
  blockQuote.classList.add
  ('text-style');
  blockQuote.innerHTML = data.quote;
}
//-----------------------------------

//Swanson----------------------------
const SwansonQuote = () => {
  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(res => res.json())
  .then(data => SwansonedQuote(data))
}

const SwansonedQuote = (data) => {
  const blockQuote = document
  .getElementById('quote2');
  blockQuote.classList.add('text-style');
  blockQuote.innerHTML = data;
}
//-----------------------------------

//Both-------------------------------
function Convo(){
  KanyeQuote();
  SwansonQuote();
}
//-----------------------------------
*/


async function fetchKanyeQuote(characterId) {
  const respone = await fetch('https://api.kanye.rest');
  const data = await respone.json();
  let quote = data.quote;
  const quoteElement = document.getElementById(`quote${characterId}`);

  if(quote.length > 42){
    quote = quote.replace(/\n/g, '<br>');
    quote = quote.replace(/(.{42})(?:\s|$)/g, '$1<br>');
  }

  quoteElement.innerHTML = quote;
  fadeInQuoteBubble(characterId);
  setTimeout(() => fadeOutQutoeBubble(characterId), 1000);
}


async function fetchRonQuote(characterId){
  const respone = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  const data = await respone.json(); 
  let quote = data[0];
  const quoteElement = document.getElementById(`quote${characterId}`);

  if(quote.length > 42){
    quote = quote.replace(/\n/g, '<br>');
    quote = quote.replace(/(.{42})(?:\s|$)/g, '$1<br>');
  }
  
  quoteElement.innerHTML = quote;
  fadeInQuoteBubble(characterId);
  setTimeout(() => fadeOutQutoeBubble(characterId), 1000);
}


function fadeInQuoteBubble(characterId){
  const quoteBubble = document.querySelector(`#quote${characterId}`).parentNode;
  quoteBubble.style.opacity = 1;
}

function fadeOutQutoeBubble(characterId){
  const quoteBubble = document.querySelector(`#quote${characterId}`).parentNode;
  quoteBubble.style.opacity = 0;
}

/*
const toLearn = () => {
  const check1 = fetch('https://api.kanye.rest').then(res => res.json());
  console.log(check1);
}
*/