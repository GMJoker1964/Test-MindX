import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event){
      event.preventDefault();
  }

  

  return(
    <div className="login-warper">
      <h1>Login</h1>
      <form>
        <label>
          <p>Username</p>
        </label>
      </form>
    </div>
  ); 
  
}

export default Login;
