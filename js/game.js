const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wc/store/products";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

const options = {
    method: 'GET'
};



async function getGameData(){
    try{
        const response = await fetch(corsEnabledUrl);
        const data = await response.json();

        console.log(data);
        

    }
    catch(error){

    }
};

getGameData();