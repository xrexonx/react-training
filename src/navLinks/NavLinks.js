import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavLinks extends Component {
  render() {
    const { links, location: { pathname } } = this.props;

    return (
      <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
        {links.map(link => {
          const nLink = link === 'Portfolio' ? '' : link.toLowerCase();
          const to = `/${nLink}`;
          const isActive = pathname === to ? 'is-active' : '';
          const cNames = `mdl-navigation__link ${isActive}`;
          return (
            <Link
              to={to}
              key={link}
              className={cNames}
            >
              {link}
            </Link>
          )}
        )}
      </nav>
    );
  }
}

export default withRouter(NavLinks);