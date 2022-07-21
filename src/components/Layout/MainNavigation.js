import { Link } from 'react-router-dom';
import CartContext from '../Cart/CartContext';
import React, {useContext}  from 'react';
import classes from './MainNavigation.module.css';

const MainNavigation = () => 
{
  const crtctx = useContext(CartContext);
  const isLoggedIn = crtctx.isLoggedIn;

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLoggedIn && <li>
            <button onClick={crtctx.removeToken}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
