//Capture elements from DOM
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat');
const availableSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const counter = document.getElementById('counter');
const total = document.getElementById('total');
const selectedMovie = document.getElementById('movie');
const videosrc = document.getElementById('m');
const buy = document.getElementById('buy');

//Price of the movie
let ticketPrice = +selectedMovie.value;

//Fill the UI
fillUI();

function updateScreen(movieClasses) {
    videosrc.src = movieClasses[0] + ".mp4";
    console.log(videosrc.src);
    console.log(videosrc.classList);
}


/* FUNCTIONS */
function updateSeatsSelection() {

    selectedSeats = document.querySelectorAll('.row .seat.selected');
    occupiedSeats = document.querySelectorAll('.row .seat.occupied');
    /*
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...availableSeats].indexOf(seat);
    });
    */


    const seatsIndex = [...selectedSeats].map((seat) => [...availableSeats].indexOf(seat));
    const occupiedSeatsIndex = [...occupiedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    localStorage.setItem('occupiedSeats', JSON.stringify(occupiedSeatsIndex));


    const selectedSeatsCounter = selectedSeats.length;
    counter.innerText = selectedSeatsCounter;
    total.innerText = selectedSeatsCounter * ticketPrice;
}

function fillUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const occupiedSeats = JSON.parse(localStorage.getItem('occupiedSeats'));


    if(selectedSeats != null && selectedSeats.length > 0){

        availableSeats.forEach((seat, seatIndex) => {
            if(selectedSeats.indexOf(seatIndex) > -1){
                seat.classList.add('selected');
            }
        });

    }

    if(occupiedSeats != null && occupiedSeats.length > 0){

        seats.forEach((seat, occupiedSeatsIndex) => {
            if(occupiedSeats.indexOf(occupiedSeatsIndex) > -1){
                seat.classList.remove('selected');
                seat.classList.add('occupied');
            }
        });
    }



    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null){
        selectedMovie.selectedIndex = selectedMovieIndex;
    }

    const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

    if(selectedMoviePrice !== null){
        ticketPrice = +selectedMoviePrice;
    }


    updateSeatsSelection();
}



/* EVENTS */
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSeatsSelection();
    }
});


selectedMovie.addEventListener('change', (e) => {

    ticketPrice = +e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    const movieClasses = Array.from(selectedOption.classList);


    updateSeatsSelection();
    updateScreen(movieClasses);
});


buy.addEventListener('click', (e) =>{

    seats.forEach( (e) => {
        if(e.classList.contains('selected')){
            e.classList.replace('selected','occupied');
        }
    });

    updateSeatsSelection();

});

updateSeatsSelection();
