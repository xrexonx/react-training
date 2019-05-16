import React, { Component, Fragment } from 'react';
import NavLinks from '../navLinks/NavLinks';

class Header extends Component {
  componentDidMount() {
    this.setState({
      headerTitle: 'ReactJS Training - FPT Software PH',
      links: [
        'Portfolio',
        'Blog',
        'About',
        'Users'
      ]
    })
  }

  render() {

    if (!this.state) {
      return null;
    }

    const { links, headerTitle } = this.state;
    return (
      <Fragment>
        <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
          <div className="mdl-layout__header-row portfolio-logo-row">
          <span className="mdl-layout__title">
              <div className="portfolio-logo"/>
              <span className="mdl-layout__title">{headerTitle}</span>
          </span>
          </div>
          <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <NavLinks links={links}/>
          </div>
        </header>
        <div className="mdl-layout__drawer mdl-layout--small-screen-only">
          <NavLinks links={links}/>
        </div>
      </Fragment>
    );
  }
}

export default Header;