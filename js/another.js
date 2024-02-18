let selectedSeats = [];
function selectSeat(seatId) {
    let seatElement = document.getElementById(seatId);
    if (selectedSeats.includes(seatId)) {
        selectedSeats = selectedSeats.filter(item => item !== seatId);
        seatElement.classList.remove("bg-green-500", "text-white");
        seatElement.classList.add("bg-gray-100");
    } else {
        if (selectedSeats.length < 4) {
            selectedSeats.push(seatId);
            seatElement.classList.remove("bg-gray-100");
            seatElement.classList.add("bg-green-500", "text-white");
        } else {
            alert("You can only select a maximum of 4 seats.");
        }
    }
}