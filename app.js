const displayQuotes = document.querySelector('.display-quotes');
const button = document.querySelector('.btn');



const quotesArr = [
    "Dream big, start small, but never stop moving.",
    "The best way to predict the future is to build it.",
    "Growth begins at the edge of your comfort zone.",
    "Success is built one small step at a time.",
    "Fear fades when action takes the lead.",
    "Every expert was once a beginner.",
    "Consistency beats talent when talent isn’t consistent.",
    "You don’t have to be great to start, but you have to start to be great."
]
displayQuotes.innerText = quotesArr[0];

const generateQuoteRandomly = () => {
    for(let quote of quotesArr){
        const random = Math.floor(Math.random() * quotesArr.length);
        displayQuotes.innerText = quotesArr[random];
        
    }
}

let setTimer = setInterval(() => {
    generateQuoteRandomly();
},5000);

  
button.addEventListener('click', generateQuoteRandomly);