document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getPokemon(e) {
    e.preventDefault();
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.querySelector("#pokemonCard").innerHTML = `
            <h3>${capitalizeFirstLetter(data.name)}</h3>
                <img
                    src="${data.sprites.other["official-artwork"].front_default}"
                    alt="Pokemon name"
                    class="pokemonImage"
                />
                <div class="pokemonCard">
                    <h6 class="pokemonCard-title">Habilidades especiales</h6>
                            <p class="pokemonCard-ability">${data.abilities[0].ability.name}</p>
                            <p class="pokemonCard-ability">${data.abilities[1].ability.name}</p>
                </div>`;
            })
            .catch((err) => {
            document.querySelector("#pokemonCard").innerHTML = `
            <h4>No encontramos el pokemon 😞</h4>
            <img src="./Imagenes/notFound.jpg" alt="404" class="imageError"/>
            `;
            console.log("Pokemon not found", err);
            });

    
}