// document.getElementById('getPosts').addEventListener('click', getPosts);
const cardsContainer = document.getElementById('cards');
const filterOutputMovies = document.getElementById('output');
const botonAZ = document.getElementById("AzButton");
const botonZA = document.getElementById("ZaButton");
const buscarMovies = document.getElementById("send");
const textoMovies = document.getElementById("text");


// const getPosts = () => {
//   fetch('http://www.omdbapi.com/?s=drama&&apikey=ee879aa1')
//     .then((res) => res.json())
//     .then((data) => {
//       allMovies(data.Search);
//     });
// };
// getPosts();

// const allMovies = (data) => {
//   const displayCards = (data) => { /* mostrar los datos  en pantalla*/
//     let output = '<h2>Posts</h2>';
//     data.forEach(post => {
//       output += `
//       <div >
//         <h3>${post.Title}</h3>
//         <img src="${post.Poster}" alt="imagen de ${post.Title}">
//         <p>Type : ${post.Type}</p>   
//         <p>Year : ${post.Year}</p>         
//       </div>
//     `;
//     });
//     return cardsContainer.innerHTML = output;
//   };
//   displayCards(data);  
// }

let allMovies = [];

const filterByTitle = (title) => {
  fetch(`https://www.omdbapi.com/?s=${title}&apikey=ea8492c7 `) 
    .then(resp => 
      resp.json())
    .then((data) => {
      let string = ' ';
      allMovies = data.Search;
      allMovies.forEach(post => {
        filterOutputMovies.innerHTML = '';
        string += `
          <div >
            <h3>${post.Title}</h3>
            <img src="${post.Poster}" alt="imagen de ${post.Title}">
            <p>Tipo : ${post.Type}</p>   
            <p>Año : ${post.Year}</p>   
          </div>
        `;
        
      });
      filterOutputMovies.innerHTML = string;
    });
};

filterByTitle('drama');
buscarMovies.addEventListener("click", () => {
  
  let valueImput =textoMovies.value
  filterByTitle(valueImput); 
})

botonAZ.addEventListener("click", () => {
  filterOutputMovies.innerHTML = '';
  let string = ' ';
  let ordenado = sortData(allMovies,"Az");
  ordenado.forEach(post => {
    string += `
      <div >
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
  let ordenadoTwo = sortData(allMovies,"Za");
  ordenadoTwo.forEach(post => {
    string += `
      <div >
        <h3>${post.Title}</h3>
        <img src="${post.Poster}" alt="imagen de ${post.Title}">
        <p>Tipo : ${post.Type}</p>   
        <p>Año : ${post.Year}</p>   
      </div>
    `;
    
  });
  filterOutputMovies.innerHTML = string;
})