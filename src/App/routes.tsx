import React from 'react'

import { BuyFlow } from 'Pages'

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
    element: <div />,
    loader: <div>loading...</div>,
  },
  {
    path: '/buy/insurance_dev',
    exact: true,
    element: <BuyFlow />,
    loader: <div>loading...</div>,
  },
]

export default routes
