import Layout from "../layouts/layout";
import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function SignUp(props) {
  let name = useRef(),
    username = useRef(),
    email = useRef();

  function getDataFromServer(data) {
    axios
      .post("/api/signup", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // console.log(data);
  }

  const [data, setData] = useState();

  // Get list of all users
  // useEffect(() => {
  //   axios
  //     .post("/api/get-all-users")
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // function checkIfUsernameExist() {
  //   let usernameExist = false;

  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].username == username.current.value) {
  //       usernameExist = true;
  //     }
  //   }

  //   return usernameExist;
  // }

  console.log(props.data);
  if (!props.data?.username) {
    return (
      <Layout className="signup">
        <h1>Sign Up</h1>
        <form
          className="signup__form"
          onSubmit={(e) => {
            e.preventDefault();

            // Checks if fields are not filled, give them class invalid if not
            if (name.current.value === "")
              name.current.classList.add("invalid");
            if (username.current.value === "")
              username.current.classList.add("invalid");

            // If single letter is typed, removes invalid class
            name.current.addEventListener("input", (e) => {
              if (e.target.value.length > 1) {
                e.target.classList.remove("invalid");
              }
            });
            username.current.addEventListener("input", (e) => {
              if (e.target.value.length > 1) {
                e.target.classList.remove("invalid");
              }
            });

            if (name.current.value != "" && username.current.value != "") {
              getDataFromServer({
                id: props.accountInfo,
                name: name.current.value,
                username: username.current.value,
                email: email.current.value,
                created_at: new Date().toLocaleString(),
              });
            }

            // TODO:
            // check if the username is already taken
            // check if the email exists
          }}
        >
          {/* Name */}
          <div>
            <p>
              Set Name <span className="red-color">*</span>
            </p>
            <input type="text" name="name" placeholder="Name" ref={name} />
          </div>

          {/* User Name */}
          <div>
            <p>
              Set Username <span className="red-color">*</span>
            </p>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              ref={username}
            />
          </div>

          {/* Email */}
          <div>
            <p>
              Set Email (Optional - For promotional mails and discount coupen)
            </p>
            <input
              type="text"
              name="email"
              placeholder="user@example.com"
              ref={email}
            />
          </div>

          {/* Submit */}
          <div>
            <p>Let's get you signed up:</p>
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </Layout>
    );
  }
  return (
    <Layout>
      <div>
        <h1>You already have a username</h1>
      </div>
    </Layout>
  );
}
