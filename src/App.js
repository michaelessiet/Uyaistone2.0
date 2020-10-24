import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import './components/styles/App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Router className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          {Home}
        </Route>
        <Route exact path="/AboutUs">
          {AboutUs}
        </Route>
        <Route exact path="/Products">
          {Products}
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
          />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
