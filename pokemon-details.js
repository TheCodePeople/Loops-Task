async function getPokemonDetails(name) {
    if (!name) {
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async function displayPokemonDetails() {
    const searchParams = new URLSearchParams(window.location.search);
    const pokemonName = searchParams.get("name");
  
    const pokemonContainer = document.getElementById("pokemon-conatiner");
  
    const data = await getPokemonDetails(pokemonName);
  
    const image = document.createElement("img");
    image.src = data.sprites.back_default;
  
    pokemonContainer.appendChild(image);
  
    console.log(data);
  }
  
  displayPokemonDetails();