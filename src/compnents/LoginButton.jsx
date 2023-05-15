import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
    const { loginWithRedirect , user} = useAuth0();

    
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <h1>{console.log(user)}</h1>
    </div>
  )
}

export default LoginButton
