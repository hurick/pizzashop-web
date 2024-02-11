import { createBrowserRouter } from 'react-router-dom'

import { LayoutApp } from '@/pages/_layouts/app'
import { LayoutAuth } from '@/pages/_layouts/auth'
import { Dashboard } from '@/pages/app/dashboard'
import { Orders } from '@/pages/app/orders'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutApp />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
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
