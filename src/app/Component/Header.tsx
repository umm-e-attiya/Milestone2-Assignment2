import React from "react";
import Link from "next/link";

const Navbar = () => {
    return(
        <div id="A">
            
        <h1>TrendSetters Apparel</h1>
           
         <ul id="a">
                <li><Link href="/">Home</Link></li>
                <li><Link href="./About">About</Link></li>
                <li><Link href= "./Contact">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;