const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200) {
        const data = await APIResponse.json();   
        return data;
    }
}

const fetchAbility = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/ability/${pokemon}`);
    
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
        abilityContainer.style.display = 'block';
        descriptionCard.style.display = 'none';
        renderStats(pokemon);
        renderMeasure(pokemon);
        renderAbilities(pokemon);
        pokeImage.style.display = 'block';
        pokeName.innerHTML = data.name;
        pokeNumber.innerHTML = data.id;
        if(data.id < 650) {
            pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        } else {
            pokeImage.src = data.sprites.front_default;
        }   
    } else {
        pokeName.innerHTML = 'Not Found Pokemon';
        pokeNumber.innerHTML = '~~';
        pokeImage.style.display = 'none';
    }
    inputSearch.value = '';
    searchNum = 1;
    searchNum = data.id;
}
    
const statusValues = document.querySelectorAll('.stats-value');
const statusBar = document.querySelectorAll('.status-bar');
const statusValueTotal = document.querySelector('#status-value-all');
const renderStats = async (pokemon) => {
        const data = await fetchPokemon(pokemon);
        let som = 0;
        for(const [index, num] of statusValues.entries()) {
            statusValues[index].innerHTML = data.stats[index].base_stat;
            statusBar[index].value = data.stats[index].base_stat;
            som += data.stats[index].base_stat;
        }

        statusValueTotal.innerHTML = som;
}

const height = document.querySelector('#poke-height');
const weight = document.querySelector('#poke-weight');
const renderMeasure = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    height.innerHTML = `${(data.height * 10).toFixed(1)}cm`;
    weight.innerHTML = `${(data.weight * 0.1).toFixed(1)}kg`;
}

const search = document.querySelector('#form-search');
const inputSearch = document.querySelector('#input-search');

const defaultAbilities = document.querySelector('#default-abities');
const hiddeAbilities = document.querySelector('#hidden-abilities-container');
const displaNone = document.querySelector('#hidden-abilities');
const abilityContainer = document.querySelector('#ability-container');
const descriptionCard = document.querySelector('#description-card-abilities');
const descriptionCardA = document.querySelector('#description-card-text');
const closeIcon = document.querySelector('#x-icon-asset');
const a = document.querySelector('#description-ability-title');
const renderAbilities = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    defaultAbilities.innerHTML = '';
    hiddeAbilities.innerHTML = '';
    let isHidde;
    
    data.abilities.forEach(async ability => {
        const abilityData = await fetchAbility((ability.ability.name).toLowerCase());
        const abilityCard = document.createElement("p");
        abilityCard.classList.add('poke-card');
        abilityCard.classList.add('poke-card-ability');
        abilityCard.innerHTML = ability.ability.name
        if(!ability.is_hidden) {
            defaultAbilities.appendChild(abilityCard);
            isHidde = false;
        } else {
            hiddeAbilities.appendChild(abilityCard);
            isHidde = true;
        }

        if(!isHidde) {
            displaNone.style.display = 'none';
        } else {
            displaNone.style.display = 'block';
        }
        
        abilityCard.addEventListener('click', () => {
            descriptionCardA.innerHTML= '';
            abilityContainer.style.display = 'none';
            descriptionCard.style.display = 'block';
            const description = document.createElement("p");
            
            description.classList.add('poke-description');
            a.innerHTML = ability.ability.name;
            description.innerHTML = abilityData.effect_entries[0].effect;
            descriptionCardA.appendChild(description);
        });
        closeIcon.addEventListener('click', () => {
            abilityContainer.style.display = 'block';
            descriptionCard.style.display = 'none';
        })
    });
    
}

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
});



const fetchAllPokemon = async () => {

    for (let i; i <= 1000; i++) {
        renderPokedex(renderPokemon(i));
    }
}

const listPokedex = document.querySelector('#poke-list');
const renderPokedex = async function() {
    const data = await fetchPokemon(pokemon);

    const pokedexCard = document.createElement("div");
    const pokedexImage = document.createElement("img");
    const pokedexNumber = document.createElement("p")
    abilityCard.classList.add('poke-card');
    abilityCard.classList.add('poke-card-ability');
    abilityCard.innerHTML = ability.ability.name
}

renderPokemon('1');
renderPokedex();