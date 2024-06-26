import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const NavBar = () => {
  const { user , logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
    .then(() => {
      navigate( '/')
    }).catch((error) =>  {
      console.log(error)
    });
  }

  const navItem = (
    <>
      <li>
        <NavLink to="/">Item 1</NavLink>
      </li>

      {user?.email ? (
        
        <><li>
          <NavLink to="/Bookings">Bookings</NavLink>
        </li><NavLink>
            <button className="btn bg-white btn-sm font-thin hover:bg-none" onClick={handleLogout}>Logout</button>
          </NavLink></>
    
      ) : (
        <li>
          {" "}
          <NavLink to="/login">Login</NavLink>
        </li>
      )}

      <li>
        <NavLink to="/signUp">SignUp</NavLink>
      </li>

    </>
  );
  return (
    <div className="navbar bg-base-100 h-[46px] mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <p className=" text-orange-600 p-4 m-4 font-bold uppercase">
            {user.email}
          </p>
        )}
        <button className="btn btn-outline btn-error hover:text-white">
          Himel
        </button>
      </div>
    </div>
  );
};

export default NavBar;
