// // PAIR PROGRAMMING PRACTICE // //
// fork and clone this repo and follow the instructions in this file

// for all the instructions below work in this file, DO NOT amend the html to get your results, use DOM manipulation

// // DELIVERABLES // //

// 1. create a new div with an id of movie-posters and append it to the body
const body = document.querySelector('body')
const moviePosterOne = document.createElement("div")
moviePosterOne.id = "movie-poster-one"
body.append(moviePosterOne)


// 2. do this three times:
const moviePosterTwo = document.createElement("div")
moviePosterTwo.id = "movie-poster-two"
body.append(moviePosterTwo)

const moviePosterThree = document.createElement("div")
moviePosterThree.id = "movie-poster-three"
body.append(moviePosterThree)

// 2.1 find a movie poster you like and add it as an <img> inside the movie-posters div
const marcel = document.createElement('img')
marcel.src = "https://image.tmdb.org/t/p/original/q3pOUMWRncUkGJu8J1cYFUS4eKM.jpg"
moviePosterOne.append(marcel)
    // marcel.style.width(100)
    // marcel.style.height(200)

const marcelTitle = document.createElement('h2')
marcelTitle.textContent = "Marcel the Shell with Shoes On"
moviePosterOne.prepend(marcelTitle)

const marcelText = document.createElement('p')
marcelText.textContent = "Marcel the Shell with Shoes On is a really good movie. You will cry."
moviePosterOne.append(marcelText)

// 2.2 further refine the movie posters:
// change it so each movie poster is a <div> which has children for the poster <img>, the title <h2> and a short description <p>

//second movie
const RRR = document.createElement('img')
RRR.src = "https://m.media-amazon.com/images/I/714lbsoabGL._AC_UF894,1000_QL80_.jpg"
moviePosterTwo.append(RRR)

const RRRTitle = document.createElement('h2')
RRRTitle.textContent = "RRR"
moviePosterTwo.prepend(RRRTitle)

const RRRText = document.createElement('p')
RRRText.textContent = "RRR is a really long movie. It might make you cry as well."
moviePosterTwo.append(RRRText)


//third movie
const SixthSense = document.createElement('img')
SixthSense.src = "https://www.masoncityposters.com/cdn/shop/products/The_Sixth_Sense_MCP0013_Movie_Poster_27x40_grande.jpg?v=1453534614"
moviePosterThree.append(SixthSense)

const SixthSenseTitle = document.createElement('h2')
SixthSenseTitle.textContent = "Sixth Sense"
moviePosterThree.prepend(SixthSenseTitle)

const SixthSenseText = document.createElement('p')
SixthSenseText.textContent = "Sixth Sense is a classic movie. You'll never guess the end!"
moviePosterThree.append(SixthSenseText)

// 4. console.log the title and description for the first movie poster
console.log(marcelTitle, marcelText)

// 5. change the <img> src, title text, and description text for the second movie poster
RRR.src = 'https://static.wikia.nocookie.net/milkshake/images/6/6d/Boohbahs.jpg/revision/latest?cb=20200403103147'
RRRTitle.textContent = "Boohbah"
RRRText.textContent = "Boohbah is a weird show."

// 6. delete the last movie poster
SixthSense.remove()

// // HINTS // //

// given that adding movie posters is a repetetive task, it may be easier to build
// a function that takes in certain arguments and does the work for you...

function addMoviePosters(film, link, div) {
    film = document.createElement('img')
    film.src = link
    div.append(film)  
}

addMoviePosters ("Gladiator", 
                "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/622/643/thumb_ACCD110B-A360-476A-A575-9B056EED316B.jpg", 
                body)


// remember that you need a few steps in order to finally see a dom element on the page:
// create the element
// change attributes like text or src
// append the element