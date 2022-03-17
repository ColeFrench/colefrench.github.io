import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Make all hrefs react router links
function LinkRenderer({ ...children }) {
  return <Link {...children} />;
}

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  componentDidMount() {
    fetch(this.props.children)
      .then((response) => response.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    return <ReactMarkdown components={{ Link: LinkRenderer }}>{this.state.markdown}</ReactMarkdown>;
  }
}

Markdown.propTypes = { children: PropTypes.node.isRequired };
export default Markdown;
