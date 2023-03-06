import logo from 'Assets/svg/logo.svg'
import {  Route, Link } from 'react-router-dom'
import { BuyFlow } from 'Pages'
import { ProductIds } from 'Pages/BuyFlow'
// import BuyFlow from '../Pages/BuyFlow/Buyflow'
// import Buyflow, { ProductIds } from '../Pages/BuyFlow/buyFlow'

const App = () => {
  console.log(ProductIds, 'ProductIds')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Route path="/buy/insurance_dev">
          {/* <BuyFlow productId={ProductIds.devIns} /> */}
        </Route>
        {/* <Route path="/">
          <p>Welcome to Getsafe's Developer Insurance</p>
          <Link to="/buy/insurance_dev">Get started!</Link>
        </Route> */}
    </div>
  )
}

export default App
