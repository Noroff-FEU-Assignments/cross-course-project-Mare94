const gamesContainer = document.querySelector(".games");
const usedGamesContainer = document.querySelector(".used-games");
const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

// needed to get api call

const options = {
    method: 'GET'
};

// first call for API data to create new games info

async function getGameData(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        
        for(let i = 0; i < 8; i++){

            console.log(data[i].name);
            console.log(data[i].images.src);
            console.log(data[i].prices.price);

            gamesContainer.innerHTML += `<a href="details.html?id=${data[i].id}" class='result'>
                                            <h3>Game: ${data[i].name}</h3>
                                            <div> <img src="${data[i].images[0].src}" class="game-img" alt="${data[i].name}" /> </div>
                                            <h4>${data[i].short_description}</h4>
                                            <h4>${data[i].price_html}</h4></a>
                                            
                                            `;


        }

    }
    catch(error){

    }
};

getGameData();

// second call for API data to create used game info

async function getUsedGameData(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        
        for(let i = 0; i < 8; i++){

            console.log(data[i].name);
            console.log(data[i].images.src);
            console.log(data[i].prices.price);

            usedGamesContainer.innerHTML += `<a href="details.html?name=${data[i].name}" class='result'>
                                            <h3>Game: ${data[i].name}</h3>
                                            <div> <img src="${data[i].images[0].src}" class="game-img" /> </div>
                                            <h4>${data[i].short_description}</h4>
                                            <h4>${data[i].price_html}</h4></a>
                                            
                                            `;


        }

    }
    catch(error){

    }
};

getUsedGameData();