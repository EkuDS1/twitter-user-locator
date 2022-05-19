import React, { useState } from 'react';
// import { withRouter } from "react-router-dom";
import Textfieldoutput from './textfield.jsx';
import * as myConst from '../sources/Constants.jsx'

const OutputContactfields = myConst.ContactFields.map((val)=>{
  return (<>
    {<Textfieldoutput
    text = {val.title}
    type = {val.type}
    name = {val.title}
    value = {val.value}
    placeholder = {val.placeholder}/>}</>);
});

const Contact = () => {

  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    message:'',
  });
  
  const formSubmit = () =>{

  }
    return ( 
      <>
      <div className='my-5'>
        <h1 className='text-center'> Contact US</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
            {OutputContactfields}
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" 
              class="form-label">Message</label>
              <textarea class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"
              name = 'message'
              value={data.message}
              onChange = {InputEvent}
              />
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>

        </div>
      </div>

      </>
    );
}

export default Contact;