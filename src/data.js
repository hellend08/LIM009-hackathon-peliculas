// const sorData = (a, b) => {// Función para ordenar los pelicula por nombre  
//   (a.Title > b.Title ? 1 : -1);   
// };

// window.sorData = sorData; 

  const compareSortData = (elemA, elemB) => {
    if (elemA.Title > elemB.Title)
      return 1;
    if (elemA.Title < elemB.Title)
      return -1;
    return 0;
  };
  const sortData = (data, sortBy) => {
    let sortedData = data.sort(compareSortData);
    if (sortBy === "Az") {
      return sortedData;
    } else if (sortBy === "Za") {
      return sortedData.reverse();
    }
    return data;
  }
  window.sortData = sortData;


