import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

function SideBar() {
  return (
    <section id="sidebar">
      <section id="intro">
        <Link to="/" className="logo">
          <img src={`${process.env.PUBLIC_PATH}images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2>Cole French</h2>
        </header>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; 2022 <Link to="/">Cole French</Link>. Base design by <a href="https://html5up.net">HTML5 UP</a> and <a href="https://mldangelo.com">Michael D&apos;Angelo</a>.</p>
      </section>
    </section>
  );
}

export default SideBar;
