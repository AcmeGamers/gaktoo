import React, { useState } from "react";
import "./style.css";

const Login = () => {
const [errorMessage, setErrorMessage] = useState("");
const [defaultAccount, setDefaultAccount] = useState("");

const connectWallet = ({accountInfo}) => {
    console.log(accountInfo)

    if (window.etherium){
        window.etherium.request({
            method: "eth_requestAccounts",
        }).then(result=> {
            accountChangeHandler(result[0]);
        }
          )
        // metamask popup
        // added utils and store in the source
    }else{
        setDefaultAccount("Please install metamask");
    }
};

const accountChangeHandler = (newAccounts) => {
    setDefaultAccount(newAccounts);
}

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
