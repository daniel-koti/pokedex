import { render } from '@testing-library/react'
import { ToggleTheme } from './toggle-theme'

describe('Toggle theme select', () => {
  it('should render toggle theme button', () => {
    const { getByText } = render(<ToggleTheme />)

    expect(getByText('Toggle theme')).toBeInTheDocument()
  })
})
