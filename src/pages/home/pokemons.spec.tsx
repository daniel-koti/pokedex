import { renderHook, screen, waitFor } from '@testing-library/react'
import { Pokemons } from './pokemons'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { usePokemons } from '@/hooks/use-pokemons'

const queryClient = new QueryClient()

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('Pokemons List', () => {
  it('should render pokemons list', async () => {
    const { result, rerender } = renderHook(() => usePokemons('higher'), {
      wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    rerender(<Pokemons />)
    expect(screen.getByText('Details')).toBeInTheDocument()
  })
})
