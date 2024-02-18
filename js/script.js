// seat item count
let seatCount = 0;

//seat count indicator 
function totalSelectedSea() {
    const currentSeatElement = document.getElementById('seat-increase');
    const currentSeatText = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatText);

    const totalSeatCount = currentSeat + 1;
    currentSeatElement.innerText = totalSeatCount;
}

//add seat title 
function seatTitle(){
    const seatTextName = document.get
}

// seat price count
let perSeatPrice = 550;
function seatPriceCount() {
    const totalSeatPrice = perSeatPrice * seatCount;
    const priceElement = document.getElementById('total-price').innerText = totalSeatPrice;
}


// get seat item
const items = document.querySelectorAll('.item');

for (const item of items) {
    item.addEventListener('click', function (key) {

        const itemElement = key.currentTarget;
        if (seatCount < 4) {
            itemElement.classList.add('bg-green-400', "text-white");
            seatCount++;
            totalSelectedSea()
            seatPriceCount();
        }
        else {
            alert("You can only select a maximum of 4 seats.");
        };
    })
}

