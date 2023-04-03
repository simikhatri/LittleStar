import React from 'react';
import "./css/footer.css";
import fb from "./images/fb.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import insta from "./images/insta.png";



function Footer() {
  return (
    // <footer className="container">
    //     <p className="float-end"><a href="#">Back to top</a></p>
    //     <p>© Little Star, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
    // </footer>
    <>
      <div className="footer">
        <div className="sb__footer section__padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>FIND US</h4>
              <p>Mirpurkhas</p>
              <p>Karachi</p>
              <p>Hydrabad</p>
            </div>
            <div className="sb__footer-links_div">
              <h4>HOURS</h4>
              <h5>Monday-Saturday</h5>
              <p>7am-10pm</p>
              <h5>Sunday</h5>
              <p>10am-7pm</p>
            </div>
            <div className="sb__footer-links_div">
              <h4>CONTACT US</h4>
                <h5> +1(234)568912</h5>
                <h5>Email12@gmail.com</h5>
            </div>
            <div className="sb__footer-links_div">
              <h4>Comming soon on</h4>
              <div className="socialmedia">
                <p> <img src={fb} alt="" /> </p>
                <p> <img src={twitter} alt="" /> </p>
                <p> <img src={linkedin} alt="" /> </p>
                <p> <img src={insta} alt="" /> </p>

              </div>
            </div>
          </div>
          <hr />
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>
                @{new Date().getFullYear()} codeInn. All right reserved.
              </p>
            </div>
            <div className="sb__footer-below-links">
              <a href="/"><div><p>terms and conditions</p></div></a>
              <a href="/"><div><p>Privacy</p></div></a>
              <a href="/"><div><p>Sercurity</p></div></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
