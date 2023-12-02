// header
let lastScrollTop = 0;
const thresholdPixel = 100;

const header = document.querySelector('.Header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > thresholdPixel) {
    // visibilities the header
    header.classList.add('is-visible');
  } else {
    // hide the header when it back to the top
    header.classList.remove('is-visible');
  }

  lastScrollTop = scrollTop;
});

// start page
const slides = document.querySelectorAll('.slide__item');
let currentSlideIndex = 0;

setInterval(() => {
  slides[currentSlideIndex].classList.remove('is-current');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.add('is-current');
}, 10000);

// // first page
// window.addEventListener('scroll', function() {
//   var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//
//   if (scrollDistance > 100) {
//     document.querySelector('.Container').classList.add('active');
//   } else {
//     document.querySelector('.Container').classList.remove('active');
//   }
// });

// title
function toggleAnimationOnScroll() {
  var titles = document.querySelectorAll('.Container .title h1');
  var containers = document.querySelectorAll('.container');
  var divs = document.querySelectorAll('div')

  titles.forEach(function (h1) {
    var positionFromTop = h1.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 80) {
      h1.classList.add('active');
    } else {
      h1.classList.remove('active');
    }
  });

  containers.forEach(function (container) {
    var positionFromTop = container.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 100) {
      container.classList.add('active');
    } else {
      container.classList.remove('active');
    }
  });

  // divs.forEach(function (div) {
  //   var positionFromTop = div.getBoundingClientRect().top;
  //
  //   if (positionFromTop - window.innerHeight <= 100) {
  //     div.classList.add('active');
  //   } else {
  //     div.classList.remove('active');
  //   }
  // });
}

window.addEventListener('scroll', toggleAnimationOnScroll);


// first page slider
let currentImage = 0;
const images = document.querySelectorAll('.Container .FirstPage .container .slider .images .image');

// console.log(images.length)

function updateSlidesPosition() {
  const imagesContainer = document.querySelector('.Container .FirstPage .container .slider .images');
  const imageWidth = images[0].clientWidth;
  const newLeft = -imageWidth * currentImage;
  imagesContainer.style.transform = `translateX(${newLeft}px)`;
}

function moveSlide(direction) {
  // console.log(currentImage)
  if (direction === -1 && currentImage > 0) {
    currentImage--;
  } else if (direction === 1 && currentImage < images.length - 1) {
    currentImage++;
  }
  updateSlidesPosition();
}

updateSlidesPosition();


// second page slider

let currentImageSec = 0;
const imagesSec = document.querySelectorAll('.Container .SecondPage .container .slider .images .image');

// console.log(imagesSec.length)

function updateSlidesPositionSec() {
  const imagesContainer = document.querySelector('.Container .SecondPage .container .slider .images');
  const imageWidth = imagesSec[0].clientWidth;
  const newLeft = -imageWidth * currentImageSec;
  imagesContainer.style.transform = `translateX(${newLeft}px)`;
}

function moveSlideSec(direction) {
  // console.log(currentImageSec)
  if (direction === -1 && currentImageSec > 0) {
    currentImageSec--;
  } else if (direction === 1 && currentImageSec < imagesSec.length - 1) {
    currentImageSec++;
  }
  updateSlidesPositionSec();
}

updateSlidesPositionSec();

// second page slider
let currentImageThi = 0;
const imagesThi = document.querySelectorAll('.Container .ThirdPage .container .slider .images .image');

// console.log(imagesSec.length)

function updateSlidesPositionThi() {
  const imagesContainer = document.querySelector('.Container .ThirdPage .container .slider .images');
  const imageWidth = imagesThi[0].clientWidth;
  const newLeft = -imageWidth * currentImageThi;
  imagesContainer.style.transform = `translateX(${newLeft}px)`;
}

function moveSlideThi(direction) {
  // console.log(currentImageSec)
  if (direction === -1 && currentImageThi > 0) {
    currentImageThi--;
  } else if (direction === 1 && currentImageThi < imagesThi.length - 1) {
    currentImageThi++;
  }
  updateSlidesPositionThi();
}

updateSlidesPositionThi();

// pop up window
function fadeInPopWindow() {
  const pop = document.querySelector('.Container .AboutMe .popWindow');

  var positionFromTop = pop.getBoundingClientRect().top;
  if (positionFromTop - window.innerHeight <= 100) {
    pop.classList.add('active');
  } else {
    pop.classList.remove('active');
  }
}

function fadeInSequentially() {
  const pops = document.querySelectorAll('.Container .AboutMe .popWindow .pop');
  let delay = 400;

  pops.forEach((pop) => {
    setTimeout(() => {
      pop.classList.add('active');
    }, delay);
    delay += 500;
  });
}

function onScrollHandler() {
  const aboutMePosition = document.querySelector('.AboutMe').getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const pop = document.querySelector('.Container .AboutMe .popWindow')
  // console.log(aboutMePosition);
  // console.log(windowHeight);

  if (aboutMePosition < windowHeight) {
    fadeInPopWindow()
    fadeInSequentially();
    if (window.getComputedStyle(pop).opacity === '1') {
      window.removeEventListener('scroll', onScrollHandler);
      addLetter();
    }
  }
}

window.addEventListener('scroll', onScrollHandler)

const nameElement = document.getElementById('typing');
const fullName = "Hi, I'm Kun Zhou";
let index = 0;

// Function to add a letter
function addLetter() {
  if (index < fullName.length) {
    nameElement.innerHTML += fullName.charAt(index);
    index++;
    setTimeout(addLetter, 150); // Delay of 150ms between each letter
  }
}

// setTimeout(function () {
//   // Start the typing effect
//   addLetter();
// }, 1500)

