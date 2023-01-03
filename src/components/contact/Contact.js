import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact__Wrapper">
        <div className="contact__info">
          <h3 className="contact__title">Contact us</h3>
          <p className="contact__dis">
            We're open for any suggestion or just to have a chat
          </p>
          <div className="contact__infoDetails">
            <div className="details">
              <h3>ADDRESS:</h3>
              <p>
                198 West 21th Street,
                <br /> Suite 721 New York NY <br /> 10016
              </p>
            </div>
            <div className="details">
              <h3>EMAIL:</h3>
              <p>info@yoursite.com</p>
            </div>

            <div className="details">
              <h3>PHONE:</h3>
              <p>+ 1235 2355 98</p>
            </div>
          </div>
          <div className="contact__form">
            <div>
              <input type="text" name="" id="" placeholder="Name" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Email" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Subject" />
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Create a message here"
              ></textarea>
            </div>
            <div>
              <button>send message</button>
            </div>
          </div>
        </div>
        <div className="contact__map">Map</div>
      </div>
    </>
  );
};

export default Contact;
