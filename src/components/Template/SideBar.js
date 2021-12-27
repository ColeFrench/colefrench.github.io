import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Cole French</h2>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; 2021 Cole French <Link to="/">cfrench.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
