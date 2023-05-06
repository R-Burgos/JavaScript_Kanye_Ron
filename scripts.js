//Kanye-----------------------------
const KanyeQuote = () => {
  fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then(data => KanyedQuote(data))
}

const KanyedQuote = (data) => {
  const blockQuote = document
  .getElementById('kanyed-quote');
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
  .getElementById('swansoned-quote');
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








/*
const toLearn = () => {
  const check1 = fetch('https://api.kanye.rest').then(res => res.json());
  console.log(check1);
}
*/