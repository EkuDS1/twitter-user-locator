import React from 'react';
// import {withRouter} from "react-router-dom";
import * as myConst from "../sources/Constants.jsx"
import Carousel from 'react-bootstrap/Carousel'

const style = {
  color: "black",
  letterSpacing: "7px",

}
const About = () => {
  return (
    <>
<Carousel>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src= {myConst.about1_img}
      alt="Second slide"
    />
    .<br/>.<br/>
    <Carousel.Caption style = {style}>
      <bold>ENVIRONMENTAL  ANALYSIS</bold>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {myConst.about2_img}
      alt="Second slide"
    />
    .<br/>.<br/>
    <Carousel.Caption style = {style}>
      ENVIRONMENTAL ANALYSIS
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
  );
}

export default About;
