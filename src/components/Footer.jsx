import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Created By Souhayb</p>
    </footer>
  );
}

export default Footer;
