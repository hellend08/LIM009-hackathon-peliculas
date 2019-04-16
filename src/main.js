document.getElementById('getPosts').addEventListener('click', getPosts);

function getPosts() {
  fetch('http://www.omdbapi.com/?s=drama&&apikey=ee879aa1')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Posts</h2>';
      data.Search.forEach(post => {
        output += `
          <div >
            <h3>${post.Title}</h3>
            <img src="${post.Poster}" alt="imagen de ${post.Title}">
            <p>Tipo : ${post.Type}</p>   
            <p>Año : ${post.Year}</p>         
          </div>
        `;
      });
      document.getElementById('output').innerHTML = output;
    });
}


