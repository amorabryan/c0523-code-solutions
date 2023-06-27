export default function PokemonList({ pokedex }) {
  const listPokemon = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listPokemon}</ul>;
}
