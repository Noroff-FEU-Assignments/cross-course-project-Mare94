function displayError(message){

    if(!message){
        message = "An error has occured!";
    }

    return `<div class="error">${message}</div>`;
}