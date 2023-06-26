import React from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
const Sidebar = () => {
  var tl = gsap.timeline({delay:1});
const aside = document.querySelector("aside");
const nav = document.querySelector("nav");
tl.from("aside",{x:-100,delay:1,width:0,rotate:0,duration:2});
tl.to("aside",{x:0,width:165,rotate:0});
// tl.from("aside",{duration:3,scale:0,rotate:760});
// tl.to("aside",{delay:3,scale:1});

  return (
    <>
      
      <aside className="nav-bar">
        <Link className="logo" to="/">
          <h1 className="Head">A</h1>
          <p className="subHead">Aman Khan</p>
        </Link>
        <nav>
          <NavLink exact activeClassName="active" to="/">
          <span>Home</span>
            <i className="fa-sharp fa-solid fa-house"></i>
          
          </NavLink>
          <NavLink exact activeClassName="active" to="/about" className="about-link"><span>about</span>
            <i className="fa-solid fa-user"></i>
            
          </NavLink>
          <NavLink exact activeClassName="active" to="/contact" className="contact-link"> <span>contact</span>
            <i className="fa-solid fa-envelope"></i>
           
          </NavLink>
        </nav>
        <ul>
            <li>
                <a rel = "noreferrer"
                target="_blank"href="https://www.linkedin.com/in/aman-khan-593824257">
<i class="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li>
                <a rel = "noreferrer"
                target="_blank"href="https://github.com/Amankh00">
<i class="fa-brands fa-github"></i>
                </a>
            </li>

        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
