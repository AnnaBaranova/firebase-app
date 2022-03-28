import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/', { replace: true });
    });
  };

  return (
    <div className='loginPage'>
      <p>Sign in with Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;