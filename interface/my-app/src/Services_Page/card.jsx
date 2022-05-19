import React from 'react';
// import {withRouter} from "react-router-dom"

const Card = (props) => {
  return (
    <>
        <div className='col-md-4 col-10 mx-auto'>
            <div className='card'>
                <img src={props.imgsrc} class = "card-img-top" alt= {props.imgsrc}/>
                <div className = "card-body">
                  <h5 className = "card-title font-weight-bold">{props.title}</h5>
                  <p className ="card-text">
                  </p>
                  <a href='#' className = "btn btn-primary">
                    Locate
                  </a>
                </div>                
            </div>
        </div>
    </>
  );
}

export default Card;
