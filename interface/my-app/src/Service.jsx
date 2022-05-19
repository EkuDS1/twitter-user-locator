import React from 'react';
// import {withRouter} from "react-router-dom"
/* withRouter is used for exporting the default if 
if exporting variable create issue use withRouter */
import Card from './card';
import imgData from "./imgData.jsx"

// Card created for the services
const outputCard = imgData.map((val)=>{
    return <>{<Card 
      title = {val.title}
      imgsrc = {val.imgsrc}/>}</>;
});

const Service = () => {
  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>
        Our Services
      </h1>
    </div>
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-4'>
          {outputCard}
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Service;
