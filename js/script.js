
//Toggles booking form window by pressing button "Поиск гостиницы в Седоне"

var bookingButton = document.querySelector(".booking__button");
var bookingForm = document.querySelector(".booking-form");

bookingButton.addEventListener("click", function(event) {
  event.preventDefault();
  bookingForm.classList.toggle("booking-form--hide");
})


//Adds class "no-js" to html if JS is disabled

var html = document.documentElement;

html.className = html.className.replace("no-js","js");
