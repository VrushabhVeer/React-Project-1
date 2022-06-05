import React from 'react';
import styles from '../homepage/Homepage.module.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h70/hb0/27533245579294/Fossil-Carousal-Web.jpg" class="d-block w-100" alt=""/>
          </div>
          <div class="carousel-item">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hf4/hd4/27653227020318/ZINKLONDON-Carousel-web-1840x500.jpg" class="d-block w-100" alt=""/>
          </div>
          <div class="carousel-item">
            <img src="https://sslimages.shoppersstop.com/sys-master/root/h60/h9c/27472653516830/1840x500Web.jpg" class="d-block w-100" alt=""/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>


      <div className={styles.top}>
        <div className={styles.container}>
          <img src="https://images.unsplash.com/photo-1542409432-9de2c84cdfe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8WmUzSW14aEZwb298fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          <div className={styles.centered}>
            <Link to="/MensData">
              <button>SHOP MEN</button>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div className={styles.centered}>
            <Link to="/WomensData">
              <button>SHOP WOMEN</button>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <img
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <div className={styles.centered}>
            <button>ACCESSORIES</button>
          </div>
        </div>
      </div>


      <div className={styles.newArrival}>
        <h1>New Arrival</h1>
        <h2>collection houses our first-ever</h2>
        <button>SHOP NOW</button>
      </div>


      <div className={styles.seasonCollection}>
        <img src="https://images.unsplash.com/photo-1574261352245-0cbfbc0aba28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <img src="https://images.unsplash.com/photo-1525450754258-0f4cbd02718d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <div>
          <p>#NEW SUMMER COLLECTION 2022</p>
          <h1>SUMMER SALE</h1>
          <button>SHOP NOW</button>
        </div>
      </div>


      <div className={styles.accessoriesTop}>
        <h2>#ACCESSORIES</h2>
        <div className={styles.accessories}>
          <div className={styles.container}>
            <img
              src="https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0NzA0NjI1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <div className={styles.centered}>
              <button>SHOP WOMEN</button>
            </div>
          </div>
          <div className={styles.container}>
            <img
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className={styles.centered}>
              <button>SHOP MEN</button>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.shoes}>
        <img
          src="https://images.unsplash.com/photo-1576672843344-f01907a9d40c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <img
          src="https://images.unsplash.com/photo-1577982886439-c25dc08b0c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        <div>
          <p>#NEW SUMMER COLLECTION 2022</p>
          <h1>NEW SHOES</h1>
          <button>SHOP NOW</button>
        </div>
      </div>


      <div className={styles.serviceTop}>
        <h2>#OUR SERVICE</h2>
        <p>WE WANT YOU TO EXPRESS YOURSELF</p>
        <div className={styles.service}>
          <div>
            <p>REFUND POLICY</p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </p>
          </div>
          <div>
            <p>PREMIUM PACKAGING</p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </p>
          </div>
          <div>
            <p>SUPERIOR QUALITY</p>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>


      <div className={styles.newslater}>
        <h2>#SUBCRIBE TO OUR NEWSLETTER</h2>
        <input type="text" placeholder="Enter email adress" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Homepage;