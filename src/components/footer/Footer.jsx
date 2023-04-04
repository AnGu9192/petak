import React from "react";
import Logo from '../../assets/logo.png'
 import "./Footer.css";
 import facebook from "../../assets/socialIcons/facebook.png";
import inn from "../../assets/socialIcons/in.png";
import instagram from "../../assets/socialIcons/instagram.png";

export default function Footer() {
  return (
    <>
      <div className="footer_logo">
        <img src={Logo} alt="footervector" className="footer_vector" />
      </div>
      <div className="footer">
        <div className="footer_container">
          <div className="row">
            <div className="footer-about footer-col">
              <h4>About</h4>
              <a href="#">Compnay info</a>
              <a href="#">News</a>
              <a href="#">Privacy</a>
              <a href="#">Careers</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Advertise with us</a>
              <a href="#">Policies</a>
            </div>
            <div className="Apps footer-col">
              <h4>Apps</h4>
              <a href="#">Compnay info</a>
              <a href="#">News</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-help footer-col">
              <h4>Help</h4>
              <a href="#">Compnay info</a>
              <a href="#">News</a>
            </div>
            <div className="footer-sell footer-col">
              <h4>Sell</h4>
              <a href="#">Compnay info</a>
              <a href="#">News</a>
            </div>
            <div className="footer-discovery footer-col">
              <div>
                <h4>Discovery</h4>
                <a href="#">Compnay info</a>
                <a href="#">News</a>
              </div>
             
                <h4 className="footer_icon_follow">Follow Us</h4>
                <div className="social_icons">
                <a href="">
                  <img src={facebook} />
                </a>
                <a href="">
                  <img src={inn} />
                </a>
                <a href="">
                  <img src={instagram} />
                </a>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
