//Cria um objeto vazio
const pokeApi = {}

//Com esse método lidamos com a API e o consumo do HTTP
pokeApi.getAllPokemon = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    //fetch() fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
    return fetch(url)

        //Transformando o response em uma Promise do body convertido em json()
        .then((response) => response.json())

        //Recebe o body convertido e pega a lista que é o "results"
        .then((bodyConvertidoEmJson) => bodyConvertidoEmJson.results)

        .catch((error) => console.error(error))


} 