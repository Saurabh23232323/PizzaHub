import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47ieivw",
        "template_pwaulck",
        form.current,
        "Jx1CbgBOkrpdGk3GD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(e.target.reset());
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <section className="contact">
    <div class="container">
    <h2>Contact Us</h2>
    <form ref={form} onSubmit={sendEmail}>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="user_email" required />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <div class="form-group">
      <input type="submit" value="Submit" />
    </div>
  </form>
</div>
</section>
  );
};

  export default Contact;

