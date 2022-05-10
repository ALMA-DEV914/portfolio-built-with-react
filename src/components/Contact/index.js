import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const firstNameRef = useRef(null)
  const lastNameRef =  useRef(null)
  const emailRef = useRef(null)
  const messageRef =  useRef(null);

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
}
  const handleSubmit = (event) => {
    event.preventDefault()
 const data = {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value
          }
    alert("Thank you for contacting us! \n" + "We received your data 😎" + JSON.stringify(data))
}


  return (
    <>
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
        <label htmlFor="firstName">First name</label>
      <input
           type="text"
           name="firstName"
           className="firstName"
           tabIndex="1"
           ref={firstNameRef}
           onBlur={handleChange}
      />
        </div>
        <div>
        <label htmlFor="lastName">Last name</label>
      <input
           type="text"
           name="lastName"
           className="lastName"
           tabIndex="2"
           ref={lastNameRef}
           onBlur={handleChange}
      />
        </div>
        <div>
        <label htmlFor="email">Email</label><br></br>
     <input
     type="email"
     name="email"
     id="email"
     className="message"
     placeholder="example@gmail.com"
     tabIndex="3"
     ref={emailRef}
     onBlur={handleChange}
    />
    </div>
    <div>
    <label htmlFor="message">Message</label>
<textarea
  placeholder="Start typing..."
  className="message"
  name="message"
  ref={messageRef}
  onBlur={handleChange}
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

      </>
  );
        }
export default ContactForm;
