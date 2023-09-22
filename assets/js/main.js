//Querry String Paraments 
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

//fetch() fornece uma maneira fácil e lógica de buscar recursos de forma assíncrona na rede.
fetch(url)
//Transformando o response em promise do body convertida em json()
.then((response) => response.json())
//Recebe o body convertido e printando na tela
.then((respondeConvertidoEmJson) => console.log(respondeConvertidoEmJson))
.catch((error) => console.error(error))
    
