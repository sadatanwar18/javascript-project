// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then(response =>response.json())
//       .then(data => console.log(data))
//       .catch(error => console.log(error));

// using async await


async function abcd(){
      
    try{
        const pokemonname = document.getElementById("name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
        const data = await response.json();
        const pokemoning = data.sprites.front_default;
        const img = document.getElementById("pokemonpic");
        img.src =  pokemoning;
        img.style.display = "block";
        // console.log(data)


    }
    catch(error){
        console.log(error);
    } 



}

abcd();
