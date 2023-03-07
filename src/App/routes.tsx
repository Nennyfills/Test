import React from 'react'

import { BuyFlow, DesignerInsurance, Home } from 'Pages'
import { Navigate } from 'react-router-dom'

type route = {
  path: string
  exact: boolean
  element: React.ReactElement
  loader: React.ReactElement
}

const routes: route[] = [
  {
    path: '/',
    exact: true,
    element: <Home />,
    loader: <div>loading...</div>,
  },
  {
    path: '/buy/insurance_dev',
    exact: true,
    element: <BuyFlow />,
    loader: <div>loading...</div>,
  },
  {
    path: '/buy/insurance_designer',
    exact: true,
    element: <DesignerInsurance />,
    loader: <div>loading...</div>,
  },
  {
    path: '*',
    exact: true,
    element: <Navigate to="/" />,
    loader: <div>loading...</div>,
  },
]

export default routes
