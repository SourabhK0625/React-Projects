import classes from './ProfileForm.module.css';
import React, {useContext , useRef} from 'react';
import CartContext from '../Cart/CartContext';

const ProfileForm = () => 
{
  const crtctx = useContext(CartContext);
  const newPassword = useRef();
  const submitHandler = (event) =>
  {
    event.preventDefault();
    const enteredNewPassword = newPassword.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCJXTxViMQjMdFrJPUAo4CFUgeDKNENucE' ,
    {
      method: 'POST',
      body: JSON.stringify(
        {
        idToken: crtctx.isToken,
        password: enteredNewPassword,
        returnSecureToken: true
      }),
      headers: {
        'Context-Type' : 'application/json'
      }
    }).then(res => {

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
