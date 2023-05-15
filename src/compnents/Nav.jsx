import {Link} from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
    // const { loginWithRedirect , user} = useAuth0();
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-8'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-items'>
                <Link className='nav-link' to="/GroupedTeamMembers">Teams</Link>
            </li>
            <li className='nav-items'>
                <Link className='nav-link' to="/Charts">Chart</Link>
            </li>
            <li className='nav-items'>
                <Link className='nav-link' to="/LoginButton">Login</Link>
            </li>
        </ul>

        {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}
    </nav>
  )
}

export default Nav
