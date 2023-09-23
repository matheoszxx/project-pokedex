//Cria um objeto vazio
const pokeApi = {}

//criando o  modelo do nosso pokemon baseado na classe "pokemon-model"
function convertPokeApiDetailToPokemon(pokeDetail) {
    //instancia do objeto pokemon
    const pokemon = new Pokemon()
    pokemon.pokeNumber = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [typeMain] = types

    pokemon.types = types
    pokemon.typeMain = typeMain

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}


pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        //converte a lista de detalhes para json()
        .then((responseDetails) => responseDetails.json())
        .then(convertPokeApiDetailToPokemon)
}

//"pokeApi.getAllPokemon" constrói a URL correta para a chamada à API com base no "offset" e "limit"
pokeApi.getAllPokemon = (offset = 0, limit = 150) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    // Usa fetch para fazer a chamada à API
    return fetch(url)

        // converte a resposta em JSON.
        .then((response) => response.json())

        //pega a lista de Pokémon (chamada de "results") da resposta JSON.
        .then((bodyConvertidoEmJson) => bodyConvertidoEmJson.results)
        //Em seguida, mapeia a lista de Pokémon para chamar a função pokeApi.getPokemonDetails para cada um deles, criando uma lista de promessas.
        .then((pokemonListResults) => pokemonListResults.map(pokeApi.getPokemonDetails))
        //Usa Promise.all para esperar que todas essas promessas sejam resolvidas, resultando em uma lista de detalhes de Pokémon.
        .then((detailsListRequest) => Promise.all(detailsListRequest))
        //Finalmente pega a lista de detalhes dos pokemon
        .then((pokemonListDetails) => pokemonListDetails)
            


} 