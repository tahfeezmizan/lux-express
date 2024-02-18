// seat item count
let seatCount = 0;



// //seat title 
// function seatItem(){
//     const 
// }

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

