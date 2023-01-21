const detailContainer = document.querySelector(".game-detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const urlName = params.get("name");

const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wc/store/products";

const detailsUrl = url + urlName;

async function getGameDetail(){
   
    try{

        const response = await fetch(detailsUrl);
        const details = await response.json();

        console.log(details)

    }
    catch(error){
        console.log("An error occured");
    }
}