"use strict";
var blocks = document.querySelectorAll(".entryBlock");
blocks.forEach(function (entryBlock) {
    entryBlock.addEventListener("click", function (e) {
        fetch("https://pokeapi.co/api/v2/pokemon/" + this.firstElementChild.textContent.toLowerCase())
            .then(function (res) {
            return res.json();
        })
            .then(function (pokemon) {
            console.log(pokemon);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
});
