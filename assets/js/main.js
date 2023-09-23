

function convertPokemonToHtml(pokemon) {
    return `
        <li class="pokemon ${pokemon.typeMain}">

            <!-- header do pokemon -->
            <span class="number">#${pokemon.pokeNumber}</span>
            <span class="name">${pokemon.name}</span>

            <!-- div com os detalhes do pokemon -->
            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((typeMain) => `<li class="type ${typeMain}">${typeMain}</li>`).join('')}
                </ol>
                <!-- Imagem do pokemon -->
                <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
            </div>

        </li>
   `
}

//Pega a lista de pokemons HTML 
const pokemonListHtml = document.getElementById('pokemonListHtml')

//Transformando a lista em HTML
pokeApi.getAllPokemon().then((pokemonList = []) => {

    const newList = pokemonList.map((pokemonList) => {
        return convertPokemonToHtml(pokemonList)
    })

    //Criamos uma variavel "newListHtml" e implementamos o join() para tirar a virgula que aparecia entre as listas de pokemon
    const newListHtml = newList.join('')
    
    pokemonListHtml.innerHTML += newListHtml



    //SUBSTITUIMOS TODA ESSA LINHA DE CODIGO PARA MANIPULAR LISTA PELA FUNÇÃO .map

    // const listItems = []
    // for (let i = 0; i < pokemonList.length; i++) {
    //     const pokemon = pokemonList[i];
    //     //Gerou um conjunto de LI (listas no html) 
    //     listItems.push(convertPokemonToHtml(pokemon))

    // }  
    // console.log(listItems);
})
