const filmInfo = document.querySelector('#film-info');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
//console.log(urlParams.get('id'));

fetch('https://ghibliapi.herokuapp.com/films/' + urlParams.get('id'))
  .then(response => response.json())
  .then(data => {
    console.log(data);
    //change title of html page to film title
    document.title = data.title;
    //create img element
    const filmIcon = document.createElement('img');
    filmIcon.src = data.movie_banner;
    filmIcon.className = "filmIcon"
    filmInfo.appendChild(filmIcon);
    const filmTitle = document.createElement('div');
    filmTitle.className = "filmTitle";
    //create h1 element
    const filmH = document.createElement('h1');
    filmH.textContent = data.title;
    filmTitle.appendChild(filmH);
    //Show release year 
    const filmYear = document.createElement('span');
    filmYear.textContent = '(' + data.release_date + ')' ;
    filmTitle.appendChild(filmYear);

    filmInfo.appendChild(filmTitle);
    //create p element
    const filmP = document.createElement('p');
    filmP.textContent = data.description;
    filmInfo.appendChild(filmP)  
})