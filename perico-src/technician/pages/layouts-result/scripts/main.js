const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200) {
        const data = await APIResponse.json();   
        return data;
    }
}

let searchNum = 1;

const pokeName = document.querySelector('#pokemon-name');
const pokeNumber = document.querySelector('#pokemon-number');
const pokeImage = document.querySelector('#pokemon-image');

const renderPokemon = async (pokemon) => {
    pokeName.innerHTML = 'Loading...';
    const data = await fetchPokemon(pokemon);

    if(data) {
        pokeImage.style.display = 'block';
        pokeName.innerHTML = data.name;
        pokeNumber.innerHTML = data.id;
        if(data.id < 650) {
            pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        } else {
            pokeImage.src = data.sprites.front_default;
        }   
        console.log(data.sprites.front_default);
    } else {
        pokeName.innerHTML = 'Not Found Pokemon';
        pokeNumber.innerHTML = '~~';
        pokeImage.style.display = 'none';
    }
        inputSearch.value = '';
        searchNum = 1;
        searchNum = data.id;
}

const search = document.querySelector('#form-search');
const inputSearch = document.querySelector('#input-search');

search.addEventListener('submit', (ev) => {
    ev.preventDefault();
    renderPokemon(inputSearch.value.toLowerCase());
})

const prevPoke = document.querySelector('#button-prev');
const nextPoke = document.querySelector('#button-next');

prevPoke.addEventListener('click', () => {
    if(searchNum > 1) {
        searchNum -= 1;
        renderPokemon(searchNum);
    }
})
nextPoke.addEventListener('click', () => {
    searchNum += 1;
    renderPokemon(searchNum);
})


renderPokemon('1');