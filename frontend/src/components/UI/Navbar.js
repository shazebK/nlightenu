import React from "react";
import { NavLink,Link, Form, useRouteLoaderData } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    const token = useRouteLoaderData('root');
    return (
        <nav className="w-full h-16 flex items-center justify-around border-b-2 border-gray-200">
            <h2 className="text-[32px]"><Link to = "/">NLightenU</Link></h2>
            <ul className="w-1/2 flex justify-around">
                <li><NavLink to = "/" className={({isActive}) => isActive?"activeNavLink":undefined} end = {true}>Home</NavLink></li>
                <li><NavLink to = "/articles" className={({isActive}) => isActive?"activeNavLink":undefined}>Articles</NavLink></li>
                <li><NavLink to = "/courses" className={({isActive}) => isActive?"activeNavLink":undefined} end = {true}>Courses</NavLink></li>
                <li><NavLink to = "/about" className={({isActive}) => isActive?"activeNavLink":undefined} end = {true}>About</NavLink></li>
            </ul>
            <div className="flex">
                
                {!token && <Link to = "/auth?mode=login"><Button theme = "white">Log In</Button></Link>}
                {!token && <Link to = "/auth?mode=signup"><Button theme = "black">Sign Up</Button></Link>}
                
                {
                token && 
                <Form action = "/logout" method = "post">
                    <button>Logout</button>
                </Form>
                }
            </div>
        </nav>
    );
}

export default Navbar;