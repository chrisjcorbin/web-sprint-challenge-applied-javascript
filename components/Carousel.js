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
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const mountainsImg = document.createElement("img");
  mountainsImg.classList.add("mountainsImg");
     mountainsImg.src = "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg";
     imgContainer.appendChild(mountainsImg);

  const computerImg = document.createElement("img");
  computerImg.classList.add("computerImg");
     computerImg.src = "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg";
     imgContainer.appendChild(computerImg);

  const treesImg = document.createElement("img");
  treesImg.classList.add("treesImg");
     treesImg.src = "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg";
     imgContainer.appendChild(treesImg);

  const turntableImg = document.createElement("img");
  turntableImg.classList.add("turntableImg");
     turntableImg.src = "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg";
     imgContainer.appendChild(turntableImg);

  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");

  return carousel;
}

const carouselContainer = document.querySelector("div.carousel-container");
carouselContainer.appendChild(carouselComponent());