let blocks: NodeList = document.querySelectorAll(".entryBlock");

blocks.forEach((entryBlock: Node): any => {
	entryBlock.addEventListener("click", function (e: Event) {
		fetch(
			`https://pokeapi.co/api/v2/pokemon/${this.firstElementChild.textContent.toLowerCase()}`
		)
			.then((res) => {
				return res.json();
			})
			.then((pokemon) => {
				console.log(pokemon);
			})
			.catch((err) => {
				console.log(err);
			});
	});
});
