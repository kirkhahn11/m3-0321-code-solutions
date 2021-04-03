fetch('https://pokeapi.co/api/v2/pokemon/8')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  });
