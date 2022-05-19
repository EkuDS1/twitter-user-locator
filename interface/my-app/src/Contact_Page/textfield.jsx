import React from 'react';

const Textfieldoutput = (props) =>
{         
    return(
        <div class="mb-3">
            <label for="exampleFormControlInput1" 
            class="form-label">{props.text}</label>
            <input type= {props.type} required
            class="form-control" 
            // id="exampleFormControlInput1"
            placeholder= {props.placeholder}
            name = {props.name}
            // value= {2}
            onChange = {InputEvent}
            />
        </div>
    );
}

export default Textfieldoutput;