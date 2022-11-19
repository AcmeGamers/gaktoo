import React, { useState } from "react";
import "./style.css";

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultAccount, setDefaultAccount] = useState("");

  const connectWallet = () => {
    if (props.accountInfo) {
      setDefaultAccount(props.accountInfo);
    } else {
      setDefaultAccount("Please install metamask");
    }
  };

  const accountChangeHandler = (newAccounts) => {
    setDefaultAccount(newAccounts);
  };

  return (
    <div>
      <h2>Login to Gaktoo</h2>
      <p>or connect wallet to start your learning journey</p>
      <button onClick={connectWallet}>Connect</button>
      <h3>Address: {defaultAccount} </h3>
      {errorMessage}
    </div>
  );
};

export default Login;
