import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link active' : 'nav-link'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className={activeStyle} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={activeStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
