import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <>
      <Helmet title="Error" />

      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-center text-4xl font-bold">
          Oops! Tivemos um problema técnico :(
        </h1>
        <p className="mb-6 text-accent-foreground">
          Chamamos nossos engenheiros para resolver o rapidinho, não se
          preocupe!
        </p>
        <p className="text-accent-foreground">
          Por enquanto, tente voltar a página{' '}
          <Link to="/" className="text-sky-500 dark:text-sky-400">
            Dashboard
          </Link>
        </p>
      </div>
    </>
  )
}
