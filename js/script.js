const firstNameInput = document.getElementById("first-nama-input")
const submitButton = document.getElementById("submit-button")
console.log("JS Aman Lanjut Kerja")

submitButton.addEventListener("keyup", function (event) {
  event.preventDefault()
  var fristName = firstNameInput.value
  if (fristName == "") {
    submitButton.disable = true;
  } else {
    submitButton.disable = false;
  }
})


// menu toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// slider

let currentIndex = 0
const images = document.querySelectorAll(".slider-image")
const totalImages = images.length

function changeImage() {
  images[currentIndex].style.display = "none"
  currentIndex = (currentIndex + 1) % totalImages
  images[currentIndex].style.display = "block"
}

setInterval(changeImage, 2000)
