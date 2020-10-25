import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./components/styles/App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };

  const transitionProps = {
    ease: "anticipate",
    duration: 1,
  };

  return (
    <Router className="App">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            <Home
              pageTransition={pageTransition}
              transitionProps={transitionProps}
            />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs
              pageTransition={pageTransition}
              transitionProps={transitionProps}
            />
          </Route>
          <Route exact path="/Products">
            <Products
              pageTransition={pageTransition}
              transitionProps={transitionProps}
            />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              subject={subject}
              setSubject={setSubject}
              message={message}
              setMessage={setMessage}
              pageTransition={pageTransition}
              transitionProps={transitionProps}
            />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;
