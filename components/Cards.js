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

const { default: Axios } = require("axios");
const cardList = document.querySelector('.cards-container');

Axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        let newArray = Object.values(res.data.articles);
        newArray.forEach(object => {
            object.forEach(article => {
                cardList.append(newCard(article));
            });
            console.log(res);
        });
    })
    .catch(e => {
        console.log(e);
    });

    function newCard(articleList){
        const card = document.createElement('div');
        card.classList.add('card');

        const headline = document.createElement('div');
        headline.classList.add('headline');

        const author = document.createElement('div');
        author.classList.add('author');
        
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('img-container');

        const img = document.createElement('img');
        const authorStatement = document.createElement('span');

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer);
        author.appendChild(authorStatement);
        imageContainer.appendChild(img);

        card.addEventListener('click', () => {
            console.log(headline);
        });
        
        headline.textContent = articleList.headline;
        img.src = articleList.authorPhoto;
        authorStatement.textContent = `by ${articleList.authorName}`;
        return card;
    }
    