import React from 'react'

function article() {
  return (
    <div>
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
            <img src="assets/first pick.svg" alt="picture" />
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
            <img src="assets/Triangle.svg" alt="picture" />
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
            <img src="assets/Rectangle.svg" alt="picture" />
          </div>
          <p>
            Have all the outdoor gear you need for now? Buy a gift card and use
            it later or share it with friends and family.
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default article
