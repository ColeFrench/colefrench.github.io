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

    <section className="blurb">
      <h2>About</h2>
      <p>
        Curabitur mauris magna, congue in elementum rhoncus, malesuada id ipsum.
        Nulla sapien mauris, molestie ac pellentesque dapibus, dignissim a magna.
        Quisque non finibus ante.
        Aliquam erat volutpat.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">About Me</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Cole French <Link to="/">cfrench.me</Link>.</p>
    </section>
  </section>
);

export default SideBar;
