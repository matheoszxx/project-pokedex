
function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon">

            <!-- header do pokemon -->
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <!-- div com os detalhes do pokemon -->
            <div class="details">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <!-- Imagem do pokemon -->
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                alt="${pokemon.name}">
            </div>

        </li>
   `
}

//Pega a lista de pokemons HTML 
const pokemonListHtml = document.getElementById('pokemonListHtml')

//Transformando a lista em HTML
pokeApi.getAllPokemon().then((pokemonList) => {

    const listItems = []

    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        //Gerou um conjunto de LI (listas no html) 
        listItems.push(convertPokemonToHtml(pokemon))

        // troquei esse metodo "pokemonListHtml.innerHTML" pois ele concatenava item por item
    }

    console.log(listItems);
})