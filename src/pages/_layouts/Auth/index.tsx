import { Outlet } from 'react-router-dom'

export const LayoutAuth = () => {
  return (
    <header>
      <h1>Cabeçalho autenticado</h1>

      <div>
        <Outlet />
      </div>
    </header>
  )
}
