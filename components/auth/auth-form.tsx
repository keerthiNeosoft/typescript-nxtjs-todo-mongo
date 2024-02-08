import React from "react";
import { useState, useRef } from "react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

import classes from "./auth-form.module.css";

async function createUser(username: string, password: string): Promise<any> {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function AuthForm(): React.JSX.Element {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
    let allLabels = document.getElementsByTagName("label");
    for (let i = 0; i < allLabels.length; i++) {
      if (allLabels[i].htmlFor === "message") {
        allLabels[i].innerHTML = "";
      }
    }
  }

  async function submitHandler(event) {
    event.preventDefault();
    let allLabels = document.getElementsByTagName("label");
    let messageLabel;

    for (let i = 0; i < allLabels.length; i++) {
      if (allLabels[i].htmlFor === "message") {
        messageLabel = allLabels[i];
      }
    }

    const enteredUsername = nameInputRef.current && nameInputRef.current.value;
    const enteredPassword =
      passwordInputRef.current && passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        username: enteredUsername,
        password: enteredPassword,
      });

      messageLabel.innerHTML = result.error;
      console.log("=============result sign", result.error);
      if (!result?.error) {
        // set some auth state

        router.replace("/profile");
      }
    } else {
      try {
        if (enteredUsername && enteredPassword) {
          const result = await createUser(enteredUsername, enteredPassword);

          if (result.error) {
            messageLabel.innerHTML = result.error;
          }

          console.log("===========rs status", result.status);
          console.log("==========result", result);
          if (result.status === 201) {
            nameInputRef.current.value = "";
            passwordInputRef.current.value = "";
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name" className={classes.textlabel}>
            Your Name
          </label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password" className={classes.textlabel}>
            Your Password
          </label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <label htmlFor="message" className={classes.msglabel}></label>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
