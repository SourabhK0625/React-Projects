import classes from './ProfileForm.module.css';
import React, {useContext , useRef} from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../Cart/CartContext';

const ProfileForm = () => 
{
  const history = useHistory();
  const crtctx = useContext(CartContext);
  console.log(crtctx)
  const newPassword = useRef();
  const submitHandler = (event) =>
  {
    event.preventDefault();
    const enteredNewPassword = newPassword.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC8PBwyCtCdMh2P_NhHsVvZULyI-4KNNEQ' ,
    {
      method: 'POST',
      body: JSON.stringify(
        {
        idToken: crtctx.tokens.token,
        password: enteredNewPassword,
        returnSecureToken: true
      }),
      // headers: {
      //   'Context-Type' : 'application/json'
      // }
    }).then(res => {
      history.replace('/')
    })
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassword}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
