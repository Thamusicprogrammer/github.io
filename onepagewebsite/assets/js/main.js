  function toggleMode() {
    let themeElement = document.getElementById('theme');
    let toggleIcon = document.getElementById('toggle');
    let firstImg = document.getElementById('firstimg');
    let secImg = document.getElementById('secimg');
    let topGrey2 = document.getElementById('topgrey2');

    // Check if the current mode is light (toggle-on icon)
    if (themeElement.getAttribute('href') === '../assets/css/light.css') {
        // Switch to dark mode
        themeElement.setAttribute('href', './assets/css/dark.css'); 
        toggleIcon.className = 'fa-solid fa-toggle-off toggleon';
        firstImg.src = './assets/images/shape-top-black-80.png';
        secImg.src = './assets/images/shape-top-dark-grey-80.png';
        topGrey2.src = './assets/images/shape-top-dark-grey-80.png';
    } else {
        // Switch to light mode
        themeElement.setAttribute('href', '../assets/css/light.css'); 
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        firstImg.src = './assets/images/shape-top-white-80.png';
        secImg.src = './assets/images/shape-top-grey-80.png';
        topGrey2.src = './assets/images/shape-top-grey-80.png';
    }
}


// Show the button when the user scrolls down 100px
window.onscroll = 
// function() {scrollFunction()};

function scrollFunction() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
document.getElementById("scrollTopBtn").addEventListener("click", function(e){
  e.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll effect
  });
});

//COUNTDOWN

// Set the target date and time for the countdown (e.g., Dec 31, 2024, 12:00:00)
//Create a variable using var or let Var is a global variable 
var countdownDate = new Date("Oct 31, 2024 23:59:59").getTime();

// Update the countdown every second
//assigning a function to a variable which is countdowninterval
var countdownInterval = setInterval(function() {

    // Get the current time
    var now = new Date().getTime();

    // Calculate the time difference between now and the target date
    var timeRemaining = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    //math.floor is to run mathematical operation 24 hours 60 mins make 1 hour 6 seconds make 1 min and 1000 miliseconds to make a second
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // Calculate days
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// excluding 24 
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));//seconds
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); //miliseconds

    // Display the result in the respective elements
    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

    // If the countdown is finished, stop the interval  
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "Audition has started!";
    }
}, 1000); //time function is miliseconds  





//CAROUSEL

// document.addEventListener("DOMContentLoaded", function() {
//   // Array of image URLs with the correct path
//   const images = [
//     './assets/images/slide-1.jpg',
//     './assets/images/slide-2.jpg',
//     './assets/images/slide-3.jpg'
//   ];

//   // Get the element to apply the carousel
//   const carouselElement = document.querySelector('.first_page');

//   // Set the initial index for the images array
//   let currentImageIndex = 0;

//   // Function to change the background image
//   function changeBackgroundImage() {
//       if (carouselElement) {
//           // Update the background image
//           carouselElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
//           console.log(`Background changed to: ${images[currentImageIndex]}`);

//           // Move to the next image index, or loop back to the start
//           currentImageIndex = (currentImageIndex + 1) % images.length;
//       } else {
//           console.error("Element with class '.first_page' not found.");
//       }
//   }

//   // Change the background every 5 seconds
//   setInterval(changeBackgroundImage, 5000); // 5000 ms = 5 seconds

//   // Initial call to display the first image
//   changeBackgroundImage();
// });





let currentSlideIndex = 0; // Track the current slide
const slides = document.querySelectorAll('.carousel-slide img, .carousel-slide .img1'); // Get all slides
const dots = document.querySelectorAll('.dot'); // Get all navigation dots

// Show the current slide and activate the corresponding dot
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none"; // Show or hide slides
        dots[i].classList.toggle('active', i === index); // Activate or deactivate dots
    });
    currentSlideIndex = index; // Update current slide index
}

// Move to the next slide in the sequence
function nextSlide() {
    const nextIndex = (currentSlideIndex + 1) % slides.length; // Calculate next index
    showSlide(nextIndex); // Show the next slide
}

// Set up auto-slide every 5 seconds
setInterval(nextSlide, 5000); // Automatically go to the next slide every 5 seconds

// Change slide when a dot is clicked
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index)); // Show the slide corresponding to the clicked dot
});



// Initialize by showing the first slide
showSlide(0);

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});