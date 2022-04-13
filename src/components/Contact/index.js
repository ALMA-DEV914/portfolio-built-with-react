import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    // setFormState({ ...formState, name: e.target.value });
    // setFormState({ ...formState, [e.target.name]: e.target.value });
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    // console.log("errorMessage", errorMessage);
    // console.log(e.target.name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  //   console.log(formState);
  // JSX
  return (
    <main>
    <section id="contact">
      <h1 data-testid="h1tag">Contact me</h1>
      <div className="email">
        <p id="pdf">Email Address: <a href="mailto:aungonalna58@gmail.com">
          aungonalna58@gmail.com</a><br></br>
          Contact Number: 7757425989</p>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label><br></br>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
      Submit</button>
      </form>
      </section>
      </main>
  );
        }
export default ContactForm;