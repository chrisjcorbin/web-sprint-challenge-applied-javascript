// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

 axios
   .get("https://lambda-times-api.herokuapp.com/articles")
   .then((response) => {
     const articleData = response.data.articles;
     Object.values(articleData).forEach((articles) => {
       articles.forEach((article) => {
         cardsHome.appendChild(articleMaker(article));
       });
     });
   })
   .catch((error) => {
     console.log("This appears to be broken... " + error);
   });

 const cardsHome = document.querySelector(".cards-container");

 function articleMaker(object) {
   const articleCard = document.createElement("div");
   articleCard.classList.add("card");
   const articleHeadline = document.createElement("div");
   articleHeadline.classList.add("headline");
   articleHeadline.textContent = object.headline;
   articleCard.appendChild(articleHeadline);
   const authorBox = document.createElement("div");
   authorBox.classList.add("author");
   const authorFrame = document.createElement("div");
   authorFrame.classList.add("img-container");
   const authorImg = document.createElement("img");
   authorImg.src = object.authorPhoto;
   authorFrame.appendChild(authorImg);
   authorBox.appendChild(authorFrame);
   const authorName = document.createElement("span");
   authorName.textContent = "By " + object.authorName;
   authorBox.appendChild(authorName);
   articleCard.appendChild(authorBox);
   articleCard.addEventListener("click", () => {
     console.log(articleHeadline.textContent);
   });
   return articleCard;
 }