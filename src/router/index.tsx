import { createBrowserRouter } from 'react-router-dom'

import { LayoutApp } from '@/pages/_layouts/App'
import { LayoutAuth } from '@/pages/_layouts/Auth'
import { Dashboard } from '@/pages/app/Dashboard'
import { SignIn } from '@/pages/auth/SignIn'
import { SignUp } from '@/pages/auth/SignUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutApp />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <LayoutAuth />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
