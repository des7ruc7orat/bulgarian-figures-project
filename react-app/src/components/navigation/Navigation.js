import 'bootstrap/dist/css/bootstrap.css';
// import {NavDropdown,Nav,Navbar,NavLink, Container, Row, Col, FormLabel, FormControl, FormGroup, LinkContainer } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

//<Link to={'/register'}/>  



import styles from './Navigation.module.css';
export const Navigation = ({
 _id:userId,
 accessToken,
 email,
 username
}) => {

const {user} = useContext(AuthContext);


  let guestNavigation = (
    <>
  
      <Link className={styles.links} to="/login">Login</Link>
      <Link className={styles.links} to="/register">Register</Link>
      <Link className={styles.links} to="/about">About</Link>

      </>

  );
  let userNavigation = (
  <>
      <Link className={styles.links} to="/create">Create</Link>
      <Link className={styles.links} to="/logout">Logout</Link>
      <span className={styles['welcome-user']}>Welcome {user.username}</span>
      </>

  );

  return (
    <header>

      <nav className={styles.navbar}>
        <div className={styles.background}>
          <div className={styles.title}>
       
            Bulgarian Figures

          </div>
          <Link className={styles.links} to="/">Home</Link>
      {email
      ?userNavigation
    : guestNavigation
    }
         
        </div>

      </nav>

    </header>
  )


}

