//document.getElementById("test").innerHTML = "Teste";

var result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

var json = await result.json();

console.log(json)