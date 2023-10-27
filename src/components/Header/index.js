import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <header>
    <nav className="header-container">
      <div>
        <Link to="/">
          <h1 className="header-heading">
            COVID19
            <span className="india-text">INDIA</span>
          </h1>
        </Link>
      </div>
      <ul className="nav-menu">
        <Link to="/">
          <li key="1">
            <button type="button" className="nav-menu-item">
              Home
            </button>
          </li>
        </Link>

        <Link to="/about">
          <li key="2">
            <button type="button" className="nav-menu-item">
              About
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  </header>
)

export default Header
