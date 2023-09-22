
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


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


//fetch() fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
fetch(url)

    //Transformando o response em uma Promise do body convertido em json()
    .then((response) => response.json())

    //Recebe o body convertido e pega a lista que é o "results"
    .then((bodyConvertidoEmJson) => bodyConvertidoEmJson.results)

    //Pega a lista de pokemon e printa na tela
    .then((pokemonList) => {
        
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            //Gerou um conjunto de LI (listas no html) 
            pokemonListHtml.innerHTML += convertPokemonToHtml(pokemon)
        }
    })

    .then((error) => console.error(error))
