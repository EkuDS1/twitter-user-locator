// import { withRouter } from "react-router-dom"
import img1 from "./images/service2.jpg"
import img2 from "./images/service1.png"
import img3 from "./images/service3.jpg"
import about1 from "./images/about1.png"
import about2 from "./images/about2.png"
import icon from "./images/icon.png"


//  text fields for the contact page
export const ContactFields = [
    { title: "Full Name", type: "text", placeholder: "Enter you name" },
    { title: "Phone", type: "number", placeholder: "Mobile number" },
    { title: "Email Address", type: "email", placeholder: "name@example.com" }
]

export const imgData = [{
        imgsrc: img1,
        title: "Locate Users By UserName"
    },
    {
        imgsrc: img2,
        title: "Locate Users By Hash Tag"
    },
    {
        imgsrc: img3,
        title: "Locate Users By Word"
    },

];

export const about1_img = about1;
export const about2_img = about2;
export const icon_img = icon