import { useState } from 'react';
import styles from './Search.module.css';
import Axios from 'axios';

const Search = () => {

    const [pokemonName, setPokemonName] = useState("");
    const [pokemonChosen, setPokemonChosen] = useState(false);
    const [pokemon, setPokemon] = useState({
        name: "", 
        species: "", 
        img: "", 
        hp: "",
        attack: "",
        defense: "",
        types: "",
    });

    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=> {
            setPokemon({
                name: pokemonName, 
                species: response.data.species.name, 
                img: response.data.sprites.front_default, 
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                types: response.data.types[0].type.name,
            });
            setPokemonChosen(true);
        })
    }

    return (
        <div>
            <div className={styles.titlesection}>
                <h1>Pokémon Stats</h1>
                <input type="text" onChange={(event) => {setPokemonName(event.target.value)}} />
                <button onClick={searchPokemon}>Search Pokémon</button>
            </div>
            <div className={styles.diplaysection}>
                {!pokemonChosen ? (
                    <h1>Please Choose a Pokemon</h1>
                ) : (
                    <>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.img} />
                        <h3>Species: {pokemon.species}</h3>
                        <h3>Type: {pokemon.types}</h3>
                        <h4>HP: {pokemon.hp}</h4>
                        <h4>Attack: {pokemon.attack}</h4>
                        <h4>Defense: {pokemon.defense}</h4>
                    </>
                )}
            </div>
        </div>
    )

}

export default Search