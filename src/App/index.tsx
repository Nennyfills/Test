import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import routes from './routes'
import logo from 'Assets/svg/logo.svg'

const App = () => {
  return (
    <div className="App" data-testid="app">
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
    </div>
  )
}

export default App
