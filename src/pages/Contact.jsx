import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
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
      <Link to="https://github.com/jlandis320">GITHUB</Link>
      <Link to="https://www.linkedin.com/in/jess-landis/">LINKEDIN</Link>
    </>
  );
};

export default Contact;
