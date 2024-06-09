import React from 'react';
import './Footer.css';
import us_flag from '../images/us_flag.png';
import gpay from '../images/gpay.png';
import mastercard from '../images/mastercard.png';
import paypal from '../images/paypal.png';
import amex from '../images/amex.png';
import applepay from '../images/apple-pay.png';
import appShop from '../images/app-shop.png';
import instagram from '../images/instagram.png';
import linkedIn from '../images/linkedIn.png';

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-7">
        <h2>
          <b>BE THE FIRST TO KNOW </b>
        </h2>
      </div>
      <div className="col-md-3">
        <h2>
          <b>Contact Us </b>
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7">
        <p>Sign up for updates from mettā muse.</p>
      </div>
      <div className="col-md-3">
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 d-flex">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control input-field"
            placeholder="Enter your e-mail..."
          ></input>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            style={{ backgroundColor: 'black', fontFamily: 'grey' }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="col-md-5">
        <h2>CURRENCY</h2>
        <div className="currency-display">
          <img src={us_flag} alt="US Flag" className="currency-flag" />
          <span className="currency-code">USD</span>
        </div>
        <p style={{ fontSize: '0.8rem' }}>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
    <br></br>
    <div
      className="row"
      style={{ backgroundColor: 'white', border: '1px solid' }}
    ></div>
    <br></br>
    <div className="row">
      <div className="col-md-7">
        <div className="row">
          <div className="col-md-6">
            <h2>
              <b>mettā muse</b>
            </h2>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div className="col-md-6">
            <h2>
              <b>Quick Links</b>
            </h2>
            <p>Orders and Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <h2>
          <b>FOLLOW US</b>
        </h2>
        <div className="row d-flex justify-content-start">
          <div className="social-icons col-md-1 p-2">
            <img src={instagram} alt="Instagram" />
          </div>
          <div className="social-icons col-md-1 p-2">
            <img src={linkedIn} alt="LinkedIn " />
          </div>
        </div>
        <br></br>
        <h2>mettā muse Accepts</h2>
        <div className="row d-flex justify-content-start">
          <div className="payment-icons">
            <img src={gpay} alt="GPay" />
          </div>
          <div className="payment-icons">
            <img src={mastercard} alt="Mastercard" />
          </div>
          <div className="payment-icons">
            <img src={paypal} alt="PayPal" />
          </div>
          <div className="payment-icons">
            <img src={amex} alt="Amex" />
          </div>
          <div className="payment-icons">
            <img src={applepay} alt="ApplePay" />
          </div>
          <div className="payment-icons">
            <img src={appShop} alt="AppShop" />
          </div>
        </div>
      </div>
    </div>
    <p style={{ textAlign: 'center' }}>
      {' '}
      Copyright &copy; 2023 mettamuse. All rights reserved.
    </p>
  </footer>
);

export default Footer;
