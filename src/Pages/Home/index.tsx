import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Welcome to Getsafe's Developer Insurance</p>

      <p>Developer Insurance</p>
      <Link to="/buy/insurance_dev">Get started!</Link>
      <p>Designer Insurance</p>
      <Link to="/buy/insurance_designer">Get started!</Link>
    </div>
  )
}

export default Home
