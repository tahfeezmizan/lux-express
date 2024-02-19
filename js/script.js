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



/** 
// discount coupon 
function discountCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;
    const couponButton = document.getElementById('coupon-btn');

    // grand price
    const totalSeatPrice = perSeatPrice * seatCount;

    if (couponInputValue === 'NEW15') {
        const discountPrice = totalSeatPrice * 0.15;

        const totalDiscount = totalSeatPrice - discountPrice
        const grandPriceElement = document.getElementById('grand-total');
        grandPriceElement.innerText = totalDiscount;

        const couponContainer = document.getElementById('discount-coupon-container');
        couponContainer.classList.add('hidden')
    }
    else if (couponInputValue === 'Couple 20') {
        const discountPrice = totalSeatPrice * 0.2;

        const totalDiscount = totalSeatPrice - discountPrice
        const grandPriceElement = document.getElementById('grand-total');
        grandPriceElement.innerText = totalDiscount;

        const couponContainer = document.getElementById('discount-coupon-container');
        couponContainer.classList.add('hidden')
    }
    else {
        alert('please provide a valid coupon')
    }

}
*/
// Function to handle discount coupon
function discountCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;
    couponButton = document.getElementById('coupon-btn');

    // Grand price calculation
    const totalSeatPrice = perSeatPrice * seatCount;

    if (couponInputValue === 'NEW15') {
        const discountPrice = totalSeatPrice * 0.15;

        const DiscountTotalElement = document.getElementById('discount-total');
        DiscountTotalElement.innerText = discountPrice;

        const totalDiscount = totalSeatPrice - discountPrice;
        const grandPriceElement = document.getElementById('grand-total');
        grandPriceElement.innerText = totalDiscount;

        const couponContainer = document.getElementById('discount-coupon-container');
        couponContainer.classList.add('hidden');

        enableApplyButton();
    }
    else if (couponInputValue === 'Couple 20') {
        const discountPrice = totalSeatPrice * 0.2;

        const DiscountTotalElement = document.getElementById('discount-total');
        DiscountTotalElement.innerText = discountPrice;

        const totalDiscount = totalSeatPrice - discountPrice;
        const grandPriceElement = document.getElementById('grand-total');
        grandPriceElement.innerText = totalDiscount;


        const couponContainer = document.getElementById('discount-coupon-container');
        couponContainer.classList.add('hidden');

        enableApplyButton();
    }
    else {
        alert('Please provide a valid coupon');
    }
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


// next button popup function 
function hideAllElement() {
    const allElementHide = document.querySelector('.ticket-interface');
    allElementHide.classList.add('hidden');
}

function setPopUpSection() {
    const displayItem = document.getElementById('popup-section');
    displayItem.classList.remove('hidden')
}

function nextPopupButton() {
    hideAllElement()
    setPopUpSection()
}

// next button program 
const phoneInput = document.getElementById('phone-input');
const nextButton = document.getElementById('next-btn');

phoneInput.addEventListener('input', function () {

    if (phoneInput.value.trim() !== '') {
        nextButton.removeAttribute('disabled');
        nextButton.classList.add('bg-primaryColor');
    } else {
        nextButton.setAttribute('disabled', 'disabled');
        nextButton.classList.add('bg-gray-300');
    }
});



// back to home page 

function hidePopup() {
    const displayItem = document.getElementById('popup-section');
    displayItem.classList.add('hidden');
}

function showAllElement() {
    const allElementHide = document.querySelector('.ticket-interface');
    allElementHide.classList.remove('hidden');
}

function backToHome() {
    hidePopup()
    showAllElement()
}

