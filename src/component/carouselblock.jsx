/* eslint-disable */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './carouselblock.css';
function Carouselblock() {
  return (
   <div className='carousel-block'>    <p className='carousel-heading'>Testimonials</p>
     
    <div className="carouselstyle"  >
      <Carousel>
        <Carousel.Item interval={4000}>

          <img
            className="carouselimg1"
            src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1216,h_496,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp"
            alt="Image One"
          />
          <Carousel.Caption >
            <div className="carousel-text1">
              <p>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.

              </p>
              <p>-Anjali Srivastava, Content Intern</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img

            className="carouselimg1"
            src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1216,h_496,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp"
            alt="Image Two"
          />
          <Carousel.Caption>
<div className="carousel-text2">
            <p>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</p>
        <p>
              -Aakriti Malik, DM Intern</p></div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img

            className="carouselimg1"
            src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1216,h_496,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp"
            alt="Image Three"
          />
          <Carousel.Caption>
            <div className="carousel-text3">
            <p>Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</p>
      <p> -Harsh Rajput, General Management Intern</p></div>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
    </div>
  );
}
export default Carouselblock;