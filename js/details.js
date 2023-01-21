const detailContainer = document.querySelector(".game-detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const urlName = params.get("id");

const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wc/store/products/";

const detailsUrl = url + urlName;

console.log(detailsUrl);

async function getGameDetail(){
   
    try{

        const response = await fetch(detailsUrl);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch(error){
        console.log("An error occured");
    }
}

getGameDetail();


function createHtml(details){
    
        detailContainer.innerHTML += `
        <div class="result">  
            <h1>${details.name}</h1>
            <div> <img src="${details.images[0].src}" class="game-img" alt="${details.name}" /></div>
            <div>${details.description}</div>
            <div>Stock: ${details.add_to_cart.maximum}</div>
            <div>Price: ${details.price_html}</div>
        </div>

        `;
    
}