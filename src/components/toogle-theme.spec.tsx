import { render } from '@testing-library/react'
import { ToggleTheme } from './toggle-theme'

describe('Toggle theme select', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ToggleTheme />)
    expect(getByText('Toggle theme')).toBeInTheDocument()
  })
})
