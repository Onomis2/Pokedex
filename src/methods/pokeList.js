import { fetchPokemonList } from './pokeAPI'

export async function getPokemonList(limit = 20) {
    try {
        const results = await fetchPokemonList(`pokemon?limit=${limit}`)

        return results.map((pokemon) => {
            const id = pokemon.url.split('/').filter(Boolean).pop()
            return {
                name: pokemon.name,
                id,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            }
        })

    } catch (err) {
        console.error('Failed to load simplified Pokémon list', err)
        return []
    }
}