// seat item count
let seatCount = 0;

//seat count indicator 
function totalSelectedSeat() {
    const currentSeatElement = document.getElementById('seat-increase');
    const currentSeatText = currentSeatElement.innerText;
    const currentSeat = parseInt(currentSeatText);

    const totalSeatCount = currentSeat + 1;
    currentSeatElement.innerText = totalSeatCount;
}


// Seats left function 
function seatsLeft() {
    const totalSeatElement = document.getElementById('seat-left');
    const totalSeatText = totalSeatElement.innerText;
    const totalCurrentSeat = parseInt(totalSeatText)

    const totalSeat = totalCurrentSeat - 1;
    totalSeatElement.innerText = totalSeat
}


//add seat title 
function seatTitle() {
    const seatTextName = document.querySelectorAll('.item');
}

//ticket class
const ticketClass = 'Economy';

// seat price count
let perSeatPrice = 550;
function seatPriceCount() {
    const totalSeatPrice = perSeatPrice * seatCount;
    const priceElement = document.getElementById('total-price').innerText = totalSeatPrice;
    const grandPriceElement = document.getElementById('grand-total').innerText = totalSeatPrice;
}



// get seat item
const items = document.querySelectorAll('.item');

for (const item of items) {
    item.addEventListener('click', function (key) {
        const itemElement = key.currentTarget;
        const itemSerialText = key.currentTarget.innerText;

        
        if (seatCount < 4) {
            // Create container div
            const divElement = document.createElement('div');
            divElement.classList.add('ticket-list-container')

            const p1 = document.createElement('p');
            p1.innerText = itemSerialText;

            const p2 = document.createElement('p');
            p2.innerText = ticketClass;

            const p3 = document.createElement('p');
            p3.innerText = perSeatPrice;

            divElement.appendChild(p1);
            divElement.appendChild(p2);
            divElement.appendChild(p3);

            const ticketContainer = document.getElementById('booking-ticket-item');
            ticketContainer.appendChild(divElement);

            itemElement.classList.add('bg-green-400', "text-white");
            seatCount++;
            seatsLeft()
            totalSelectedSeat()
            seatPriceCount();
        }
        else {
            alert("You can only select a maximum of 4 seats.");
        };


    })
}

// for (const item of items) {
//     item.addEventListener('click', function (key) {
//         const itemElement = key.currentTarget;
//         const itemSerialText = key.currentTarget.innerText;

//         if (seatCount < 4) {
//             // Create container div
//             const divElement = document.createElement('div');
//             divElement.classList.add('ticket-list-container');

//             const p1 = document.createElement('p');
//             p1.innerText = itemSerialText;

//             const p2 = document.createElement('p');
//             p2.innerText = ticketClass;

//             const p3 = document.createElement('p');
//             p3.innerText = perSeatPrice;

//             divElement.appendChild(p1);
//             divElement.appendChild(p2);
//             divElement.appendChild(p3);

//             const ticketContainer = document.getElementById('booking-ticket-item');
//             ticketContainer.appendChild(divElement);

//             itemElement.classList.add('bg-green-400', "text-white");
//             seatCount++;
//             seatsLeft();
//             totalSelectedSeat();
//             seatPriceCount();


//         } else {
//             alert("You can only select a maximum of 4 seats.");
//         }
//     });
// }
