import { Suspense } from 'react'
import { Routes,Route } from 'react-router-dom'

import routes from './routes'
import logo from 'Assets/svg/logo.svg'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        {routes.map((value) => (
          <Route
            key={value?.path}
            element={
              <Suspense fallback={value?.loader}>{value?.element}</Suspense>
            }
            path={value?.path}
          />
        ))}
      </Routes>
      {/* <Route path="/buy/insurance_dev">
        <BuyFlow productId={ProductIds.devIns} />
      </Route> */}
      {/* <Route path="/">
          <p>Welcome to Getsafe's Developer Insurance</p>
          <Link to="/buy/insurance_dev">Get started!</Link>
        </Route> */}
    </div>
  )
}

export default App
