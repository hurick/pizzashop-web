import { Outlet } from 'react-router-dom'

export const LayoutApp = () => {
  return (
    <header>
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </header>
  )
}
