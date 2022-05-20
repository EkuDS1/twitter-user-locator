import React from 'react';
// import {withRouter} from "react-router-dom";
import * as myConst from "../sources/Constants.jsx"
import Carousel from 'react-bootstrap/Carousel'
const About = () => {
  return (
    <>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {myConst.image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>ABOUT US 1</h3>
      <p>We geo locate user with your given username</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {myConst.image}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>ABOUT US 2</h3>
      <p>We geo locate user with your given hash tag</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {myConst.image}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>We geo locate user with your given words trend</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
}

export default About;
