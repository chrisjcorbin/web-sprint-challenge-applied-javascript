/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

function carouselComponent() {
  const imageFactory = {
    0: "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg",
    1: "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg",
    2: "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg",
    3: "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg",
  };

  let carouselImageId = 0;

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");

  const imgContainer = document.createElement("img");
  imgContainer.classList.add("img-container");

  imgContainer.src = imageFactory[carouselImageId];
  function next() {
    if (carouselImageId === 3) {
      carouselImageId = 0;
    } else {
      carouselImageId = carouselImageId + 1;
    }
    imgContainer.src = imageFactory[carouselImageId];
  }

  function previous() {
    if (carouselImageId === 0) {
      carouselImageId = 3;
    } else {
      carouselImageId = carouselImageId - 1;
    }
    imgContainer.src = imageFactory[carouselImageId];
  }

  rightButton.onclick = next;
  leftButton.onclick = previous;

  carousel.append(leftButton, imgContainer, rightButton);
  return carousel;
}

const carouselContainer = document.querySelector("div.carousel-container");
carouselContainer.appendChild(carouselComponent());

gsap.from(".right-button", {
 duration: 4,
 x: 300,
 ease: "bounce",
 opacity: 0,
});

gsap.from(".left-button", {
 duration: 4,
 x: -300,
 ease: "bounce",
 opacity: 0,
});