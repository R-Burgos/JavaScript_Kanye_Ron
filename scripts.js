
//KANYE AND RON QUOTE FETCH----------------------------------------------------
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
  setTimeout(() => fadeOutQutoeBubble(characterId), 10000);
}


async function fetchRonQuote(characterId){
  const respone = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  const data = await respone.json(); 
  let quote = data[0];
  const quoteElement = document.getElementById(`quote${characterId}`);

  if(quote.length > 42){
    quote = quote.replace(/\n/g, '<br>');
    quote = quote.replace(/(.{42})(?:\s|$)/g, '$1<br>');
    quote = quote.replace(/\.\.\./g, '...<br>');
  }
  
  quoteElement.innerHTML = quote;
  fadeInQuoteBubble(characterId);
  setTimeout(() => fadeOutQutoeBubble(characterId), 10000);
}

//FADEIN AND FADEOUT BUBBLES--------------------------------------------------------
function fadeInQuoteBubble(characterId){
  const quoteBubble = document.querySelector(`#quote${characterId}`).parentNode;
  quoteBubble.style.opacity = 1;
}

function fadeOutQutoeBubble(characterId){
  const quoteBubble = document.querySelector(`#quote${characterId}`).parentNode;
  quoteBubble.style.opacity = 0;
}

//AUTOPLAY SECTION------------------------------------------------------------------
let isAutoPlaying = false;
let intervalId;
let currentSpeaker = 1; 

async function autoPlay() {
  if(!isAutoPlaying) {
    await fetchKanyeQuote(1);

    intervalId = setInterval(async () => {
      if (currentSpeaker === 1) {
        await fetchRonQuote(2);
        currentSpeaker = 2;
      } else {
        await fetchKanyeQuote(1);
        currentSpeaker = 1;
      }
    }, 12000);

    isAutoPlaying = true;
    document.querySelector('.js-convo-button').innerHTML = 'Auto Play (on)';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-convo-button').innerHTML = 'Auto Play (off)';
  }
}

//SCROLL SECTION------------------------------------------------------------------


function scrollToDiv(targetId) {
  const targetElement = document.getElementById(targetId);
  if(targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
