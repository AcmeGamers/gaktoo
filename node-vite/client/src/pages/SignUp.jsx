import Layout from "../layouts/layout";
import { useRef, useState } from "react";

export default function SignUp() {
  let name = useRef(),
    username = useRef(),
    email = useRef();

  const [data, setData] = useState();

  return (
    <Layout className="signup">
      <h1>Sign Up</h1>
      <form
        action="/api/signup"
        className="signup__form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.elements);

          // Checks if fields are not filled, give them class invalid if not
          if (name.current.value === "") name.current.classList.add("invalid");
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
