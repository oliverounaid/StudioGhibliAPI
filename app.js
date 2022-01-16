const filmListUl = document.querySelector('#film-list');

fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(film => {
      //create li element
      const filmLi = document.createElement('li');
      //create a element and append it to li element
      const filmA = document.createElement('a');
      filmA.textContent = film.title;
      filmA.href = 'film.html?id='+film.id;
      filmLi.appendChild(filmA); 
      //create a element and append it to li element
      const filmImageA = document.createElement('a');
      filmImageA.href = 'film.html?id='+film.id;
      filmLi.appendChild(filmImageA);
      //create img element and append it to a element
      const filmImageImg = document.createElement('img');
      filmImageImg.src = film.image;
      filmImageA.appendChild(filmImageImg);
      //append li element to ul element
      filmListUl.appendChild(filmLi);
    });
  });

  


