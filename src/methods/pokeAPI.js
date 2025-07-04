import axios from 'axios'

export async function fetchPokemonList(args = {}) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/${args}`)

        return response.data.results
    } catch (error) {
        console.error('Error fetching Pokémon:', error)

        throw error
    }
}
