import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">Simple portfolio website</div>
        </div>
        <div className="mdl-mini-footer__right-section">
          <ul className="mdl-mini-footer__link-list">
            <li><a href="bisan.unsa">Help</a></li>
            <li><a href="bisan.unsa">Privacy & Terms</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;