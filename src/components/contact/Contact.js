import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact__Wrapper">
        <div className="contact__info">
          <h3>Contact us</h3>
          <p>We're open for any suggestion or just to have a cha</p>
          <div className="contact__infoDetails">
            <div>198 West 21th Street, Suite 721 New York NY 10016</div>
            <div>EMAIL: info@yoursite.com</div>
            <div>+ 1235 2355 98</div>
          </div>
        </div>
        <div className="contact__map">Map</div>
      </div>
    </>
  );
};

export default Contact;
