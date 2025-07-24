let totalDiv = document.getElementById('total');

function displayPrice(){
    let displaySpan = document.getElementById('display');
    let selectTour = document.getElementById('selectTour');
    let valueTour = selectTour.value;
    let priceTour = 0;
    if(valueTour == "muine") {
        priceTour = 100;
    } else if (valueTour == "camau") {
        priceTour = 150;
    } else if (valueTour == "vungtau"){
        priceTour = 90;
    } else if (valueTour == "dalat"){
        priceTour = 120;
    }else {
        priceTour = 110;
    }
    displaySpan.textContent = `${priceTour}$/Person`;
}   

let totalPrice = 0;
function CalTotal(){
    let selectTour = document.getElementById('selectTour');
    let valueTour = selectTour.value;
    let priceTour = 0;
    if(valueTour == "muine") {
        priceTour = 100;
    } else if (valueTour == "camau") {
        priceTour = 150;
    } else if (valueTour == "vungtau"){
        priceTour = 90;
    } else if (valueTour == "dalat"){
        priceTour = 120;
    }else {
        priceTour = 110;
    }

    let numberPersonRaw = document.getElementById("num").value;
    let nuberPerson = parseInt(numberPersonRaw);
    totalPrice = nuberPerson * priceTour;
    totalDiv.textContent = `Total Amount ${totalPrice}$`
}