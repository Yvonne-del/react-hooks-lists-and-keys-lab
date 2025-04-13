import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a id="h" href="#home">home</a>
      <a id="a" href="#about">about</a>
      <a id="p" href="#projects">projects</a>
    </nav>
  )
}

export default NavBar;
