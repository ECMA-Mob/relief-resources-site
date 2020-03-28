import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header>
    <h1 className="font-heading text-5xl py-16 leading-none">
      <Link to="/">
        <span>The</span>
        <br />
        <span>Relief</span>
        <br />
        <span>Resources</span>
        <br />
        <span>Project</span>
      </Link>
    </h1>
  </header>
);


export default Header;
