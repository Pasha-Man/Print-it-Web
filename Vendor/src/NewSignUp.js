import  React, {useState} from "react";
import style from "./style";
import firebase from "./config";
import { Redirect } from "react-router-dom";

function NewSignUp() {
  const [isUser, setIsUser] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      number: data.get("number"),
      passwordAgain: data.get("passwordAgain"),
    });
    data.append("email", email);
    data.append("password", password);
    data.append("passwordAgain", passwordAgain);
    data.append("number", number);

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.get("email"), data.get("password"))
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User is", user);
        setIsUser(true);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log("Error is", errorMessage);
        console.log("Error code is", errorCode);
      });
  };

  if (isUser) return <Redirect to="/NewSignIn" />;
  return (
    <div style={style.fullContainer}>
      {/* <div style={style.image}></div> */}
      <div style={style.container}>
        <div style={style.strecther}>
          <p style={{ color: "white" }}>Print it</p>
        </div>
        <div>
          <h3>Sign Up</h3>
        </div>
        <div style={style.leftAligner}>
          <p style={style.topHolder}>Email</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter your Email"
            size="70"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <p style={style.bottomHolder}>Password</p>
          <input
            style={style.feilds}
            type="password"
            placeholder="Enter your password"
            size="70"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <p style={style.bottomHolder}>Confirm Password</p>
          <input
            style={style.feilds}
            type="password"
            placeholder="Enter your password "
            size="70"
            // onChange={(event) => setPasswordAgain(event.target.value)}
          ></input>
          <p style={style.topHolder}>Phone Number</p>
          <input
            style={style.feilds}
            type="text"
            placeholder="Enter your Phone number"
            size="70"
            onChange={(event) => setNumber(event.target.value)}
          ></input>
        </div>
        <div style={{margintop:"10px"}}>
          <button type="button" style={style.button} onClick={handleSubmit}>
            Sign Up{" "}
          </button>
        </div>
        <div style={style.sLastLine}>
          <a href="./NewSignIn" style={{ color: "#cf4415" }}>
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewSignUp;
