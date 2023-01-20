import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");

  const ErrorType = () => {
    let errors = [];
    if (!email || !password || !passwordConfirm)
      errors.push("All fields must be filled");

    if (!email.includes("@")) errors.push("Email must contain @ symbol");

    if (!password.length > 0)
      errors.push("Password must be at least 8 characters");

    if (password.length > 0 && password !== passwordConfirm)
      errors.push("passwords not matched !!");
    console.log(errors);

    return errors;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const errors = ErrorType();
    setDisplayMessage(
      errors.length ? errors.join(", ") : "User created succesfully !!"
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {displayMessage}
      <input type="submit" value="Submit" />
    </form>
  );
}
