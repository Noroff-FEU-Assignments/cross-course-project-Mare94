const gamesContainer = document.querySelector(".games");
const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

// needed to get api call

const options = {
    method: 'GET'
};



async function getGameData(){
    try{
        const response = await fetch(corsEnabledUrl, options);
        const data = await response.json();

        console.log(data);
        
        for(let i = 0; i < 8; i++){

            console.log(data[i].name);
            console.log(data[i].images.src);
            console.log(data[i].prices.price);



        }

    }
    catch(error){

    }
};

getGameData();