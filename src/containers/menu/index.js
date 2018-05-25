import React from 'react';
import Scrollspy from 'react-scrollspy';

const Menu = props => {
  
    return (
    		<div>
		      <Scrollspy items={ ['home', 'reception', 'venue', 'directions', 'registry', 'info', 'photos', 'rsvp'] } currentClassName="is-current" className="menu-background">
						<header className="Menu-header">
						  <a href="#main-menu"
						     role="button"
						     id="main-menu-toggle"
						     className="menu-toggle"
						     aria-expanded="false"
						     aria-controls="main-menu"
						     aria-label="Open main menu">

						    <span className="sr-only">Open main menu</span>
						    <span className="fa fa-bars" aria-hidden="true"></span>
						  </a>
						  						  
						  <div id="main-menu" role="navigation" className="main-menu" aria-expanded="false" aria-label="Main menu">
						    <a href="#main-menu-toggle"
						       role="button"
						       id="main-menu-close"
						       className="menu-close"
						       aria-expanded="false"
						       aria-controls="main-menu"
						       aria-label="Close main menu">

						      <span className="sr-only">Close main menu</span>
						      <span className="fa fa-close" aria-hidden="true"></span>
						    </a>
						    <ul>
						      <li><a 
						      	href="/#home"
						      	aria-label="Home"
						      	>Home</a></li>
						      <li><a 
						      	href="/#reception"
						      	aria-label="Home"
						      	>Reception</a></li>
						      <li><a 
						      	href="/#venue"
						      	aria-label="venue"
						      	>Venue</a></li>
						      <li><a 
						      	href="/#info"
						      	aria-label="parking and information"
						      	>Parking & Information</a></li>
						      <li><a 
						      	href="/#registry"
						      	aria-label="Registry"
						      	>Registry</a></li>
									<li><a 
						      	href="/#photos"
						      	aria-label="photo gallery"
						      	>Photos</a></li>
						      <li><a 
						      	href="/rsvp"
						      	aria-label="r.s.v.p."
						      	>RSVP</a></li>
						      <li><a 
						      	href="/friday"
						      	aria-label="friday information">Friday</a></li>
						    </ul>
						  </div>
						  <a href="#main-menu-toggle"
						     className="backdrop"
						     tabIndex="-1"
						     aria-label="menu toggle"
						     aria-hidden="true" hidden></a>
					
						</header>
					</Scrollspy>
		    </div>
    );
  
}

export default Menu;


 					 