import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from '../nav-link'

describe('NavLink', () => {
  it('should highlight nav link when it is equal to page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/orders">Pedidos</NavLink>
      </>,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/orders']}>{children}</MemoryRouter>
        ),
      },
    )

    expect(wrapper.getByText('Dashboard').dataset.current).toBe('false')
    expect(wrapper.getByText('Pedidos').dataset.current).toBe('true')
  })
})
