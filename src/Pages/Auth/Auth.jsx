import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type"

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);

  console.log(user);

  const authHandler = (e) => {
    e.preventDefault();

    if (e.target.name === "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG1.png"
          alt="Amazon"
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign-in</h1>

        <form>
          <div>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <button
            name="signin"
            type="submit"
            onClick={authHandler}
            className={classes.login_signinButton}
          >
            Sign In
          </button>
        </form>

        <button
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
