import React from "react";
import {FaChevronRight} from 'react-icons/fa'


const links = ["Home", "About", "Rooms", "Resto & Bar"];
const data = links.map((link) => {
  return (
    <li className="nav--child-links">
    <FaChevronRight />
      <a href="#"> {link}</a>
    </li>
  );
});
function FooterLinks() {
  
  return (
    <div className="links--footer">
      <h1>Quick Links</h1>
      <ul>{data}</ul>
    </div>
  );
}

export default FooterLinks;
