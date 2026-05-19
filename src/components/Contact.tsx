import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/alihamz/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                LinkedIn <MdArrowOutward className="contact-link-icon" />
              </a>
              <a
                href="https://github.com/AliHamz10"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                GitHub <MdArrowOutward className="contact-link-icon" />
              </a>
              <a
                href="mailto:alihamzatk@gmail.com"
                data-cursor="disable"
                className="contact-link"
              >
                Email <MdArrowOutward className="contact-link-icon" />
              </a>
            </div>
            <h4 className="contact-education-heading">Education</h4>
            <p className="contact-summary">
              B.A.Sc. Artificial Intelligence student at PAF IAST (Grade A),
              building AI-native products at Edversity while deepening
              foundations in ML, systems design, and product engineering.
              Bridging academic rigor with real-world shipping velocity.
            </p>
          </div>
          <div className="contact-box contact-box--credit">
            <h2>
              Designed and Developed <br /> by <span>Ali Hamza</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
