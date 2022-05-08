import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="one">
          <a href="/">
            <b>XCASH CENTRAL</b>
          </a>
          <a href="/">
            <b>Delegates</b>
          </a>
          <a href="/">
            <b>X-CASH News</b>
          </a>
        </div>
        <div className="two">
          <a href="/">
            <b>XCASH Merch</b>
          </a>
          <a href="/">Canadian Node</a>
          <a href="/" style={{ visibility: "hidden" }}>
            X-CA
          </a>
        </div>
        <div className="three">
          <p>
            Copyright © 2021 <br /> All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
