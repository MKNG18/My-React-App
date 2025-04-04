import './App.css'
import PokemonCard from './components/PokemonCard';
import {useState} from "react";



function App() {
  const [pokemonName, setPokemonName] = useState(null);
   
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  
  const selectedPokemon = pokemonList.find((poke) => poke.name === pokemonName);

  return (

    <div>

  <nav>
    <h1>Pokemon list</h1>

      {pokemonList.map((pokemon) => (<button key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
      ))}
  
    </nav>
    {selectedPokemon && <PokemonCard pokemon={selectedPokemon}/>}
    </div>

    );
  }

export default App;