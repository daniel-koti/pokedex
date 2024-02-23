import { render } from '@testing-library/react'
import { useGlobalPokemons } from '@/hooks/useGlobalPokemons'
import { Home } from '@/pages/home'

const useGlobalPokemonsMocked = jest.mocked(useGlobalPokemons)

describe('Home page', () => {
  it('renders correctly', () => {
    useGlobalPokemonsMocked.mockReturnValue({
      allPokemons: [],
      isLoadingGlobalPokemons: true,
      updateCurrentPokemon: jest.fn(),
      currentPokemon: null,
    })

    render(<Home />)
  })
})
