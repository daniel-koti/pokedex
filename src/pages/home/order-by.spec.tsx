import { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { OrderBy } from './order-by'

let mockSearchParams = ''

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => {
    const [order, setOrder] = useState(new URLSearchParams(mockSearchParams))
    return [
      order,
      (newParams: string) => {
        mockSearchParams = newParams
        setOrder(new URLSearchParams(newParams))
      },
    ]
  },
}))

describe('Order By', () => {
  it('should render all orders', () => {
    render(<OrderBy />)

    expect(screen.getByText('Higher')).toBeInTheDocument()
    expect(screen.getByText('Heaviest')).toBeInTheDocument()
    expect(screen.getByText('Lower')).toBeInTheDocument()
    expect(screen.getByText('Lighter')).toBeInTheDocument()
  })

  it('Should set higher in url order param', () => {
    render(<OrderBy />)

    const button = screen.getByText('Higher')
    fireEvent.click(button)

    expect(mockSearchParams).toEqual({ order: 'higher' })
  })

  it('Should set heaviest in url order param', () => {
    render(<OrderBy />)

    const button = screen.getByText('Heaviest')
    fireEvent.click(button)

    expect(mockSearchParams).toEqual({ order: 'heaviest' })
  })

  it('Should set heaviest in url order param', () => {
    render(<OrderBy />)

    const button = screen.getByText('Heaviest')
    fireEvent.click(button)

    expect(mockSearchParams).toEqual({ order: 'heaviest' })
  })
})
