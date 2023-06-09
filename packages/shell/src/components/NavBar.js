import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='menu-item'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Single Project
        </NavLink>
      </div>
      <div className='menu-item'>
        <NavLink
          to='/multi-project'
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Multi-Project
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
