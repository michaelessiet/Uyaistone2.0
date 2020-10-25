import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./styles/ContactUs.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactUs = ({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  subject,
  setSubject,
  pageTransition,
  transitionProps
}) => {
  function sendEmail(e) {
    e.preventDefault();

    alert("Your message has been sent");

    emailjs
      .sendForm(
        "uyaistone",
        "template_ouvadik",
        e.target,
        "user_AIXivvnfng5MyaCOMb0Hw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={transitionProps}
      className="contact-us-container"
    >
      <h1 className="header">Message Us</h1>
      <div>
        <Form onSubmit={sendEmail}>
          <div className="form-container">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="name"
                name="name"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                value={subject}
                name="subject"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={message}
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </motion.div>
  );
};

export default ContactUs;
