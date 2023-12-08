import { memo, useState } from "react"
import "./style.css"
import { BrandName, Hamburger, Navigation } from "./style";
import { HamburgerIcon } from "icons";

const Navbar = memo(() =>{
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <Navigation>
      <BrandName href="/">
        Task Manager
      </BrandName>

      <Hamburger onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        <HamburgerIcon />
      </Hamburger>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/tasks">Tasks</a>
          </li>
        </ul>
      </div>
    </Navigation>
  );
})

export default Navbar