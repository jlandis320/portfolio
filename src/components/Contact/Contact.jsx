import mail from "./Compressed-mail.svg";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="work">
      <img src={mail} alt="mail" id="contact" />
      <div style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
        <h1>Reach out if you'd like to work with me:</h1>
        <div className={styles.formContainer}>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
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
        <h3>
          Or email me at{" "}
          <a href="mailto:jreynoldslandis@gmail.com">
            jreynoldslandis@gmail.com
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
