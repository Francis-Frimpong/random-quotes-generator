const button = document.querySelector('.btn');





//Fetching quotes from the api.

const getRandomQuote = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");// this fetch the data
        const data = await response.json(); // wait for the data to respond and convert it to json
        document.querySelector('.advice').textContent =  data.slip.advice;
        document.querySelector('.adviceId').textContent = data.slip.id;

    } catch (error) {
        console.error("Error loading API:", error); // Check for error incase the data does'nt respond
    }
}

 
button.addEventListener('click', getRandomQuote);