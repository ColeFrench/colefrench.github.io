import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

function ContactIcons() {
  return (
    <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a href={s.link}>
            <FontAwesomeIcon title={s.label} icon={s.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactIcons;
