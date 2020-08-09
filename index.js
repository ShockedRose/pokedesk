document.addEventListener("DOMContentLoaded", () => {
	const showPoke = document.getElementById("Show-poke");
	pokemon();
	async function pokemon() {
		try {
			console.log("a");
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=964"
			);
			const data = await response.json();
			const allPokemon = data.results;
			const pokemonShow = allPokemon
				.map((element) => {
					if (
						element.name === "bulbasaur" ||
						element.name === "caterpie" ||
						element.name === "gyarados"
					) {
						return element.name;
					}
				})
				.filter((element) => element !== undefined);

			for (const pokemon of pokemonShow) {
				//const showPoke = document.getElementById("Show-poke");
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${pokemon}`
				);
				const data = await response.json();
				const digimon = document.createElement("div");
				const digimonImg = document.createElement("img");
				const pokeSprite = data.sprites.front_shiny;
				digimonImg.src = pokeSprite;
				const pokeName =
					data.name[0].toUpperCase() + data.name.substring(1);
				digimon.textContent = pokeName;
				digimon.appendChild(digimonImg);
				showPoke.appendChild(digimon);
			}

			var blocks = document.querySelectorAll(".entryBlock");
			var parser = new DOMParser();
			blocks.forEach(function (entryBlock) {
				entryBlock.addEventListener("click", function (e) {
					fetch(
						"https://pokeapi.co/api/v2/pokemon/" +
							this.firstElementChild.textContent.toLowerCase()
					)
						.then(function (res) {
							return res.json();
						})
						.then(function (pokemon) {
							/* <div class="entryBlock">
           <h3 class="entryName">dasdadas</h3>
           <img src="pokey.png" class="sprite" />
                  </div> */
							var creationString =
								'<div class="entryBlock"><h3 class="entryName">#' +
								pokemon.id +
								" " +
								pokemon.name +
								'</h3><img src="' +
								pokemon.sprite.other["official-artwork"][
									"front-default"
								] +
								'" /> </div>';
							var pokeEntry = parser.parseFromString(
								creationString,
								"text/html"
							);
						})
						.catch(function (err) {
							console.log(err);
						});
				});
			});
		} catch (err) {
			console.log(err);
		}
	}
});
