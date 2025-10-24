import React from 'react'
import "../components.jsx/imagine.css"
import { MdOutlineAutorenew } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import { MdPower } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";


function imagine() {
  return (
    <div>

        <div id="header">
      <div class="width-alignment" id="headers">
        <div class="header-content">
          <h3>imagine.</h3>
        </div>
        <div class="header-content-right">
          <a href="">Home</a>
          <a href="">Features</a>
           <li>
            
            <a href="">About us <FaAngleDown  class="angle-down"/></a>
          <div className="mega-menu">
            <div className="mega-menu-item">More Free Templates</div>
            <div className="mega-menu-item">Our Team</div>
            <div className="mega-menu-item">More Links <FaAngleDown  class="angle-down"/>
          </div>
          <div className="second-mega-menu">
              <div className="second-mega-menu-item">Menu one</div>
              <div className="second-mega-menu-item">Menu Two</div>
              <div className="second-mega-menu-item">Menu Three</div>
            </div>
            </div>
            </li>
          <a href="">Testimonal</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
    <div id="first-section" class="width-alignment">
      <div class="left-content">
        <h1>Make Your Business More Profitable</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div class="btn">
          <button>Get Started</button>
        </div>
      </div>
      <div class="right-content">
        <img src="/imagine-images/bj-1.svg" alt="picture" />
      </div>
    </div>
    <div id="second-section" class="width-alignment">
      <div class="content">
        <h1>Imagine Features</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Fuga quos quaerat sapiente nam, id vero
        </p>
      </div>
      <div class="boxes">
        <div class="first-three-boxes">
          <div class="boxes-body">
            <MdOutlineAutorenew  className='icon-1'/>
            <h5>Marketing Consulting</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <h6>Learn More</h6>
          </div>

          <div class="boxes-body">
            <MdStoreMallDirectory  className='icon-1'/>
            <h5>Market Analysis</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <h6>Learn More</h6>
          </div>

          <div class="boxes-body">
            <MdShoppingBasket  className='icon-1'/>
            <h5>Easy Purchase</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <h6>Learn More</h6>
          </div>
        </div>
        <div class="second-three-boxes">
          <div class="boxes-body">
            <MdOutlineSettingsBackupRestore className='icon-1' />
            <h5>Free Updates</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <h6>Learn More</h6>
          </div>

          <div class="boxes-body">
            <MdOutlineSentimentSatisfied  className='icon-1' />
            <h5>100% Satistified</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <h6>Learn More</h6>
          </div>

          <div class="boxes-body">
            <MdPower  className='icon-1'/>
            <h5>Easy Plugin</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <h6>Learn More</h6>
          </div>
        </div>
      </div>
    </div>
    <div id="third-section" class="width-alignment">
      <div class="third-left-content">
        <img src="/imagine-images/bj-2.svg" alt="picture" />
      </div>
      <div class="third-right-content">
        <h1>Communicate and gather feedback</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          neque nisi architecto autem molestias corrupti officia veniam.
        </p>
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <img src="/imagine-images/person_4.jpg.webp" alt="picture" />
              <div class="card-body-content">
                <h6>Grey Simpson</h6>
                <h5>Co-Founder, XYZ Inc.</h5>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="forth-section" class="width-alignment">
      <div class="forth-left-content">
        <h1>Communicate and gather feedback</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          neque nisi architecto autem molestias corrupti officia veniam.
        </p>
        <div class="card-1">
          <div class="card-content-1">
            <div class="card-body-1">
              <img src="/imagine-images/person_1.jpg.webp" alt="picture" />
              <div class="card-body-content-1">
                <h6>Kimberly Gush</h6>
                <h5>Co-Founder, XYZ Inc.</h5>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>
      </div>
      <div class="forth-right-content">
        <img src="/imagine-images/bj-3.svg" alt="picture" />
      </div>
    </div>
    <div id="third-section" class="width-alignment">
      <div class="third-left-content">
        <img src="/imagine-images/bj-2.svg" alt="picture" />
      </div>
      <div class="third-right-content">
        <h1>Communicate and gather feedback</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          neque nisi architecto autem molestias corrupti officia veniam.
        </p>
        <div class="card">
          <div class="card-content">
            <div class="card-body">
              <img src="/imagine-images/person_4.jpg.webp" alt="picture" />
              <div class="card-body-content">
                <h6>Grey Simpson</h6>
                <h5>Co-Founder, XYZ Inc.</h5>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="forth-section" class="width-alignment">
      <div class="forth-left-content">
        <h1>Communicate and gather feedback</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          neque nisi architecto autem molestias corrupti officia veniam.
        </p>
        <div class="card-1">
          <div class="card-content-1">
            <div class="card-body-1">
              <img src="/imagine-images/person_1.jpg.webp" alt="picture" />
              <div class="card-body-content-1">
                <h6>Kimberly Gush</h6>
                <h5>Co-Founder, XYZ Inc.</h5>
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>
      </div>
      <div class="forth-right-content">
        <img src="/imagine-images/bj-3.svg" alt="picture" />
      </div>
    </div>
    <div id="fifth-section" class="width-alignment">
      <div class="main-content">
        <h1>About Us</h1>
      </div>
      <div class="fifth-section-body">
        <div class="fifth-left-content">
          <img src="/imagine-images/bj-4.svg" alt="picture" />
        </div>
        <div class="fifth-right-content">
          <h1>Our Mission</h1>
          <p>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>
          <div class="three-headings">
            <h6>Laborum enim quasi at modi</h6>
            <h6>Ad at tempore</h6>
            <h6>Labore quaerat esse</h6>
          </div>
          <div class="btn">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
    <div id="sixth-section">
      <div class="sixth-header">
        <h1>Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          <br />
          quaerat sapiente nam, id vero.
        </p>
      </div>
      <div id="images-content" class="width-alignment">
        <div class="images-body">
          <div class="first-three">
            <div class="first-image">
              <img src="/imagine-images/person_1.jpg.webp" alt="pick" />
              <h5>Cloe Marena</h5>
              <h6>President</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </div>
            <div id="second-image" class="width-alignment">
              <img src="/imagine-images/person_2.jpg.webp" alt="pick" />
              <h5>John Rooster</h5>
              <h6>Marketing</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </div>
            <div class="third-image">
              <img src="/imagine-images/person_3.jpg.webp" alt="pick" />
              <h5>Will Turner</h5>
              <h6>Marketing</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </div>
          </div>

          <div class="second-line">
            <div class="forth-image">
              <img src="/imagine-images/person_4.jpg.webp" alt="pick" />
              <h5>Nicolas Stainer</h5>
              <h6>Financing</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </div>
            <div class="fifth-image">
              <img src="/imagine-images/person_5.jpg.webp" alt="pick" />
              <h5>George Brook</h5>
              <h6>Founder</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </div>
            <div class="sixth-image">
              <img src="/imagine-images/person_6.jpg.webp" alt="pick" />
              <h5>Emely Hopson</h5>
              <h6>Marketing</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum excepturi corporis qui doloribus perspiciatis ipsa
                modi accusantium repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="seven-section">
      <div id="seven-content" class="width-alignment">
        <h1>Testimonials</h1>
        <div class="seven-image">
          <img src="/imagine-images/person_4.jpg.webp" alt="pick" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Pariatur, iusto. Magnam iure, officiis at vero consectetur
            <br />
            placeat nam, suscipit, dolor nisi cumque sint. <br />
            Facere optio necessitatibus officia at natus minima?
          </p>
        </div>
        <h6>Roger Spears</h6>
      </div>
    </div>
    <div id="eight-section" class="width-alignment">
      <div class="eight-content">
        <h1>Blog Posts</h1>
      </div>
      <div class="eight-card-body">
        <div class="eight-cards">
          <img src="/imagine-images/img_1.jpg" alt="pick" />
          <h3>Make Your Business More Profitable</h3>
          <h6>Ham Brook • Jan 18, 2019• <span>News</span></h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <h5>Continue Reading...</h5>
        </div>
        <div class="eight-cards">
          <img src="/imagine-images/img_2.jpg" alt="pick" />
          <h3>Make Your Business More Profitable</h3>
          <h6>Ham Brook • Jan 18, 2019• <span>News</span></h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <h5>Continue Reading...</h5>
        </div>
        <div class="eight-cards">
          <img src="/imagine-images/img_3.jpg" alt="pick" />
          <h3>Make Your Business More Profitable</h3>
          <h6>Ham Brook • Jan 18, 2019• <span>News</span></h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
            quaerat rerum voluptatibus a eius.
          </p>
          <h5>Continue Reading...</h5>
        </div>
      </div>
    </div>
    <div id="second-last-section">
      <div class="width-alignment">
        <div class="second-last-content">
          <h1>Contact Us</h1>
        </div>
        <div class="form">
          <div class="form-content">
            <h4>Contact Form</h4>
            <div class="first-line">
              <div class="name">
                <h5>First Name</h5>
                <input type="text" />
              </div>
              <div class="last-name">
                <h5>Last Name</h5>
                <input type="text" />
              </div>
            </div>
            <h5>Email</h5>
            <input type="text" />
            <h5>Subject</h5>
            <input type="text" />
            <h5>Message</h5>
            <textarea placeholder="Leave Your Message here....."></textarea>
            <div class="btns">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="links" class="width-alignment">
      <div class="social-links">
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
        <IoLogoInstagram />
        <FaPinterest />
      </div>
      <p>
        Copyright ©2025 All rights reserved | This template is made with
     <IoMdHeart  className='heart'/>by Colorlib
      </p>
    </div>
        
      
    </div>
  );
}

export default imagine

