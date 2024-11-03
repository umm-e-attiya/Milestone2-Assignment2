import React from "react";
<link rel="stylesheet" href="globals.css" />
import Image from "next/image";
import pic1 from "../../../public/pic1.jpg"

const About = ()=>{
    return(
       <div>
          
           <div>
            <h1 id="about1">About Us</h1>
            </div>
            
           
            <div id= "about2">
            <div id="image1">
            <Image src={pic1} alt="hangerstore" />
            </div>
            <div id="container1">
                <p><b>Welcome to TrendSetters Apparel!</b> Founded in 2020, we are passionate about creating stylish and comfortable clothing for every occasion. Our mission is to empower individuals to express their unique style through high-quality, fashion-forward pieces. With a commitment to exceptional craftsmanship and sustainable practices, we strive to make a positive impact in the fashion industry.</p>
            </div>
            </div>

        </div>
            
          
           
       
    )
}

export default About;