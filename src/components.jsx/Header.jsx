import React from 'react'
import "./Header.css"
import { FaCartShopping } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Header() {
  return (
   <div class="main-div">
      <div class="headers">
        <header id="header">
          <button>Announcement</button>
          <p>how we are responding to a covid-19</p>
        </header>
        <div class="navbar-parent">
          <nav id="navbar" class="width-alignment">
            <div class="logo">
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <div class="links">
              <li><a href="">home</a></li>
              <li><a href="">about</a></li>
              <li><a href="">shop</a></li>
              <li><a href="">donate</a></li>
              <li><a href="">contact</a></li>
              <div id="icon-parent">
                <FaCartShopping />
                <div class="quantity">0</div>
              </div>
              <div class="hamburger-btn">
                <i class="fa fa-bars"></i>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <section id="herosection">
        <div class="hero-content width-alignment">
          <h1>Serving you since 1989.</h1>
          <p>
            Acme Outdoors is an outdoor and adventure shop located in the
            Boathouse District in Oklahoma City.
          </p>
          <button>shop Merch</button>
        </div>
      </section>
       <div class="article-header width-alignment">
        <div class="article-header-left">
          <h5>Ways to support</h5>
          <h1>Support Acme Outdoors.</h1>
        </div>
        <div class="article-header-right">
          <p>
            COVID-19 has forced us to close our retail space, but we need
            support from patrons like yourself now more than ever. Below, we’ve
            listed the best ways to help us through this season.
          </p>
        </div>
      </div>
      <div class="article-body width-alignment">
        <div class="article-card">
          <div class="article-card-body">
            <h1>01</h1>
            <h2>SHOP PRODUCT</h2>
            <img src="/images/first pick.svg" alt="picture" />
          </div>
          <p>
            Our full product line is still available online here on our site!
            Getting outside and hiking is still something you can do. Get your
            gear now!
          </p>
        </div>
        <div class="article-card">
          <div class="article-card-body">
            <h1>02</h1>
            <h2>DONATE</h2>
            <img src="/images/Triangle.svg" alt="picture" />
          </div>
          <p>
            Since we've changed the way we operate to online only, and to ensure
            your safety, not all our staff is working. Donate to keep them
            afloat.
          </p>
        </div>
        <div class="article-card">
          <div class="article-card-body">
            <h1>03</h1>
            <h2>Buy GIFT CARDS</h2>
            <img src="/images/Rectangle.svg" alt="picture" />
          </div>
          <p>
            Have all the outdoor gear you need for now? Buy a gift card and use
            it later or share it with friends and family.
          </p>
        </div>
      </div>
       <section class="third-section">
      <div class="third-section-content width-alignment">
        <h1>How we're keeping you safe during COVID-19</h1>
        <p>
          As an outdoor shop, we’ve taken precautionary measures to ensure the
          safety of all our customers and team members
        </p>
        <button>Read our statement</button>
      </div>
    </section>
    <section id="second-article">
      <div class="second-article-header width-alignment">
        <div class="second-article-header-left">
          <h5>shop products</h5>
          <h2>Open 24/7/365.</h2>
        </div>
      </div>
      <div class="second-article-body width-alignment">
        <div class="second-article-images">
          <div class="second-article-content">
            <img src="/images/unsplash.jpg" alt="picture" />
          </div>
          <h2>White tent</h2>
          <p>$ 200.00USD</p>
          <button>Details</button>
        </div>
        <div class="second-article-images">
          <div class="second-article-content">
            <img src="/images/unsplash-2.jpg" alt="picture" />
          </div>
          <h2>Tin cofee tumbler</h2>
          <p>$ 35.00USD</p>
          <button>Details</button>
        </div>
        <div class="second-article-images">
          <div class="second-article-content">
            <img src="/images/unsplash-3.jpg" alt="picture" />
          </div>
          <h2>Blue canvas pack</h2>
          <p>$ 95.00USD $145.00USD</p>
          <button>Details</button>
        </div>
      </div>
      <button class="separate-button width-alignment">view all products</button>
    </section>
    <div class="container width-alignment">
      <div class="image-container">
        <img src="/images/unsplash-4.jpg" alt="Shop Owner" />
      </div>
      <div class="content">
        <h1>Shop Local.</h1>
        <p>
          We know that during COVID-19, a lot of folks around the city and state
          are feeling uneasy about the future – we’re not sure what the future
          holds either.
        </p>
        <p>
          That said: we know that we love making sure you have the gear you need
          for your adventures, and we’re going to keep doing that – with our
          team – until the city tells us we can’t.
        </p>
        <p>
          But as long as folks like yourself support small businesses around the
          city, then we’ll be here – every day, making sure your orders arrive
          on time.
        </p>
        <div class="signature">
          <p>Jane & John Doe</p>
          <p><strong>Acme Outdoors</strong></p>
        </div>
      </div>
    </div>
    <footer class="footer-content">
      <div class="footer-body width-alignment">
        <div class="footer-logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div class="social-links">
          <FaTwitter />
         <MdFacebook />
          <FaInstagram />
        </div>
      </div>
      <p>Made in<a href="">Webflow.</a>©2020.</p>
      <a class="webflow">
        <img
          src="/images/webflow-badge-icon..svg"
          alt="pick"
          class="first-web" />
        <img
          src="/images/webflow.svg"
          alt=" made in wedbflow"
          class="second-web"
      /></a>
    </footer>
    </div>
    
  )
}

export default Header
