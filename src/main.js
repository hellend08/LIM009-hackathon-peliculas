// const cardsContainer = document.getElementById('cards');
const filterOutputMovies = document.getElementById('output');
const botonAZ = document.getElementById("AzButton");
const botonZA = document.getElementById("ZaButton");
// const buscarMovies = document.getElementById("send");
// const textoMovies = document.getElementById("text");
const imputTitle = document.getElementById('title');
const imputTitle2 = document.getElementById('title2');
const search = document.getElementById('search');
const search2 = document.getElementById('search2');

let newArray = [];
const filterByTitle = (title) => {
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=ea8492c7 `) 
    .then(resp => 
      resp.json())
    .then((data) => {
      let string = ' ';
      let newArray = data.Search;
      newArray.forEach(post => {
        filterOutputMovies.innerHTML = '';
        string += `
          <div class="col-12 col-md-4" >
            <p>${post.Title}</p>
            <img src="${post.Poster}" alt="image of ${post.Title}">
            <p>Type : ${post.Type}</p>   
            <p>Year : ${post.Year}</p>   
          </div>
        `;
      });
      filterOutputMovies.innerHTML = string;
    });
};
filterByTitle('love');

search.addEventListener('click', () => {  
  filterByTitle(imputTitle.value);
});
      // string += `
        //   <div class="col-12 col-md-4">
        //     <h3>${post.Title}</h3>
        //     <img src="${post.Poster}" alt="imagen de ${post.Title}">
        //     <p>Tipo : ${post.Type}</p>   
        //     <p>Año : ${post.Year}</p>  
// filterByTitle('Comedy');

// buscarMovies.addEventListener("click", () => {
  
//   let valueImput = textoMovies.value
//   filterByTitle(valueImput); 
// })
botonAZ.addEventListener("click", () => {
  filterOutputMovies.innerHTML = '';
  let string = ' ';
  let sort = sortData(newArray,"Az");
  sort.forEach(post => {
    string += `
      <div>
        <h3>${post.Title}</h3>
        <img src="${post.Poster}" alt="imagen de ${post.Title}">
        <p>Tipo : ${post.Type}</p>   
        <p>Año : ${post.Year}</p>   
      </div>
    `; 
  });
  filterOutputMovies.innerHTML = string;
});

botonZA.addEventListener("click", () => {
  filterOutputMovies.innerHTML = '';
  let string = ' ';
  let sortTwo = sortData(newArray,"Za");
  sortTwo.forEach(post => {
    string += `
      <div>
        <h3>${post.Title}</h3>
        <img src="${post.Poster}" alt="imagen de ${post.Title}">
        <p>Tipo : ${post.Type}</p>   
        <p>Año : ${post.Year}</p>   
      </div>
    `;
  });
  filterOutputMovies.innerHTML = string;
})



const allData = (title) => {
  fetch(`https://www.omdbapi.com/?t=${title}&apikey=ea8492c7 `) 
    .then(resp => 
      resp.json())
    .then((data) => {
      let string = ' ';      
      string += `
          <div class = "card" >
            <p>${data.Title}</p>
            <img src="${data.Poster}" alt="imagen de ${data.Title}">
            <p>Type : ${data.Type}</p>   
            <p>Director : ${data.Director}</p>  
            <p>Gender : ${data.Genre}</p> 
            <Actors : ${data.Actors}</p>
            <p>Synopsis : ${data.Plot}</p> 
            <p>Runtime : ${data.Runtime}</p>    
          </div>
        `;
        filterOutputMovies.innerHTML = string;
    });
};
search2.addEventListener('click', () => {  
  allData(imputTitle2.value);
});

