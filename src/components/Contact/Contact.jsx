import { Link } from "react-router-dom";

import styles from "../About/About.module.css"

import mail from "./Compressed-mail.svg"

const Contact = () => {
  return (
    <div>
      <img src={mail} alt="mail" />
      <h1>Reach out if you'd like to work with me:</h1>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>      
    </div>
  );
};

export default Contact;
