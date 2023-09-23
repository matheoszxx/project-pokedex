//Cria um objeto vazio
const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((responseDetails) => responseDetails.json())
}

//Com esse método lidamos com a API e o consumo do HTTP
pokeApi.getAllPokemon = (offset = 0, limit = 60) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    //fetch() fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
    return fetch(url)

        //Transformando o response em uma Promise do body convertido em json()
        .then((response) => response.json())

        //Recebe o body convertido e pega a lista que é o "results"
        .then((bodyConvertidoEmJson) => bodyConvertidoEmJson.results)
        //Recebe a lista dos results e mapea para pegar a lista dos detalhes dos pokemon
        .then((pokemonListResults) => pokemonListResults.map(pokeApi.getPokemonDetails))
        //Recebe a lista de requisição => e aplica a função promise (que toda a requisição finalize)
        .then((detailsListRequest) => Promise.all(detailsListRequest))
        //Finalmente pega a lista de detalhes dos pokemon
        .then((pokemonListDetails) => pokemonListDetails)
            


} 