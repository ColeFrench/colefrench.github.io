import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Markdown from '../components/Markdown';
import About from '../data/about.md';

function Index() {
  return (
    <Main description="Cole French's personal website.">
      <article className="post markdown" id="index">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/">About</Link></h2>
          </div>
        </header>
        <Markdown>{About}</Markdown>
      </article>
    </Main>
  );
}

export default Index;
