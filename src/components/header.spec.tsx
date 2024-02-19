import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './header'

describe('Header render', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    expect(getByText('Pokedex')).toBeInTheDocument()
    expect(getByText('Github')).toBeInTheDocument()
  })
})
