const displayQuotes = document.querySelector('.display-quotes');
const button = document.querySelector('.btn');





//Fetching quotes from the api.

const getRandomQuote = async () => {
    try {
        const response = await fetch("quotes.json");// this fetch the data
        const data = await response.json(); // wait for the data to respond and convert it to json

        data.quotes.forEach(quote => {
            const random = Math.floor(Math.random() * data.quotes.length);
            displayQuotes.innerText = data.quotes[random].text;
            
        });

    } catch (error) {
        console.error("Error loading JSON file:", error); // Check for error incase the data does'nt respond
    }
}

 
button.addEventListener('click', getRandomQuote);