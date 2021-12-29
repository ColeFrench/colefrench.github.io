import React from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// Make all hrefs react router links
function LinkRenderer({ ...children }) {
  return <Link {...children} />;
}

function Index() {
  return (
    <Main description="Cole French's personal website.">
      <article className="post markdown" id="index">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/">About</Link></h2>
          </div>
        </header>
        <Markdown components={{ Link: LinkRenderer }}>{markdown}</Markdown>
      </article>
    </Main>
  );
}

export default Index;
