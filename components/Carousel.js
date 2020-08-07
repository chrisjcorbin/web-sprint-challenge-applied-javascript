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

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img img="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img img="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img img="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img img="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// function carouselComponent() {
//   const carousel = document.createElement("div");
//   carousel.classList.add("carousel");

//   const leftButton = document.createElement("div");
//   leftButton.classList.add("left-button");

//   const mountainsImg = document.createElement("img");
//   mountainsImg.classList.add("img-container");

//   const computerImg = document.createElement("img");
//   computerImg.classList.add("img-container");

//   const treesImg = document.createElement("img");
//   treesImg.classList.add("img-container");

//   const turntableImg = document.createElement("img");
//   turntableImg.classList.add("img-container");

//   const rightButton = document.createElement("div");
//   rightButton.classList.add("right-button");

//   return carousel;
// }

function constructor() {
  const imageObj = {
    0: "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg",
    1: "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg",
    2: "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg",
    3: "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg",
  };

  let imageIndex = 0;
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  leftButton.classList.add("left-button");
  const rightButton = document.createElement("div");
  rightButton.classList.add("right-button");
  const caroImg = document.createElement("img");

  carousel.classList.add("carousel");
  
  caroImg.src = imageObj[imageIndex];
  function increment() {
    console.log("+");
    if (imageIndex === 3) {
      imageIndex = 0;
    } else {
      imageIndex = imageIndex + 1;
    }
    caroImg.src = imageObj[imageIndex];
  }

  function decrement() {
    console.log("-");
    if (imageIndex === 0) {
      imageIndex = 3;
    } else {
      imageIndex = imageIndex - 1;
    }
    caroImg.src = imageObj[imageIndex];
  }

  leftButton.onclick = decrement;
  rightButton.onclick = increment;
  carousel.append(caroImg, leftButton, rightButton);
  return carousel;
}

const entryPoint = document.querySelector(".carousel-container");

const caro = constructor();
entryPoint.appendChild(caro);