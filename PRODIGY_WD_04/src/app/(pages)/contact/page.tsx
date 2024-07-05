import { LiaPaperPlaneSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29797.002195184607!2d75.533341!3d21.007653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9106aa2bf8e7f%3A0xa4ecb7d7c8165e79!2sShramsadhana%20Bombay%20Trust%2C%20College%20of%20Engineering%20%26%20Technology%2C%20Jalgaon!5e0!3m2!1sen!2sus!4v1719331888683!5m2!1sen!2sus" 
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" disabled data-form-btn>
            <LiaPaperPlaneSolid />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};
export default Contact;
