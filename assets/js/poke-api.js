//Cria um objeto vazio
const pokeApi = {}

//criando o  modelo do nosso pokemon baseado na classe "pokemon-model"
function convertPokeApiDetailToPokemon(pokeDetail) {
    //instancia do objeto pokemon
    const pokemon = new Pokemon()
    pokemon.pokeNumber = pokeDetail.order
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

//Com esse método lidamos com a API e o consumo do HTTP
pokeApi.getAllPokemon = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    //fetch() fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
    return fetch(url)

        //Transformando o response em uma Promise do body convertido em json()
        .then((response) => response.json())

        //Recebe o body convertido e pega a lista de pokemon que é o "results"
        .then((bodyConvertidoEmJson) => bodyConvertidoEmJson.results)
        //Recebe a lista dos results e mapea para pegar a lista dos detalhes dos pokemon
        .then((pokemonListResults) => pokemonListResults.map(pokeApi.getPokemonDetails))
        //Recebe a lista de requisição => e aplica a função promise (que toda a requisição finalize)
        .then((detailsListRequest) => Promise.all(detailsListRequest))
        //Finalmente pega a lista de detalhes dos pokemon
        .then((pokemonListDetails) => pokemonListDetails)
            


} 