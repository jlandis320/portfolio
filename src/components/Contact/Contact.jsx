import mail from "./Compressed-mail.svg"

const Contact = () => {
  return (
    <div id="work">
      <img src={mail} alt="mail" id="contact"/>
      <h1>Reach out if you'd like to work with me:</h1>
      <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  );
};

export default Contact;
