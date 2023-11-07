import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const Navbar = () => {
    return (
        <nav className="w-full h-16 flex items-center justify-around border-b-2 border-gray-200">
            <h2 className="text-[32px]"><Link to = "/">NLightenU</Link></h2>
            <ul className="w-1/2 flex justify-around">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/">Articles</Link></li>
                <li><Link to = "/">Courses</Link></li>
                <li><Link to = "/">About</Link></li>
            </ul>
            <div className="flex">
                <Button theme = "white">Log In</Button>
                <Button theme = "black">Sign Up</Button>
            </div>
        </nav>
    );
}

export default Navbar;