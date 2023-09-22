
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


//fetch() fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
fetch(url)
    //Transformando o response em uma Promise do body convertido em json()
    .then((response) =>response.json())
    //Recebe o body convertido e printa na tela
    .then((bodyConvertidoEmJson) => console.log(bodyConvertidoEmJson))
    .then((error) => console.error(error))
