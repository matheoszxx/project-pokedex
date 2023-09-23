//Pega a lista de pokemons HTML 
const pokemonListHtml = document.getElementById('pokemonListHtml')

//Pega o botão de "Load More" no HTML
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 10; // Mostrar 10 Pokémon por página
let currentPage = 1; //página atual
let offset = -150;

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

function loadPokemonPage(page) {
    const offset = (page - 1) * limit;
    
    // Chamada à API para carregar a página atual
    pokeApi.getAllPokemon(offset, limit).then((pokemonList = []) => {
        const newList = pokemonList.map((pokemon) => {
            return convertPokemonToHtml(pokemon);
        });
        // Adicione os novos Pokémon à lista existente
        pokemonListHtml.innerHTML = newList.join('');

        // Verifica se atingiu o Pokémon de número 150
        if (offset + limit >= 150) {
            loadMoreButton.parentElement.removeChild(loadMoreButton) // Desativa o botão "Load More"
        }
    });
}

// Função para carregar a próxima página
function loadNextPage() {
    currentPage++;
    loadPokemonPage(currentPage);
}

// Inicialmente, carregue a primeira página
loadPokemonPage(currentPage);

// Adicione um ouvinte de evento para o botão "Load More"
loadMoreButton.addEventListener('click', loadNextPage);