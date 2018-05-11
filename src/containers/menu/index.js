import React from 'react';
import Scrollspy from 'react-scrollspy';

const Menu = props => {
  
    return (
    		<div>>
		      <Scrollspy items={ ['home', 'reception', 'venue', 'directions', 'registry', 'info', 'photos', 'rsvp'] } currentClassName="is-current">
		        <header>
						  <a href="#main-menu"
						     role="button"
						     id="main-menu-toggle"
						     class="menu-toggle"
						     aria-expanded="false"
						     aria-controls="main-menu"
						     aria-label="Open main menu">

						    <span class="sr-only">Open main menu</span>
						    <span class="fa fa-bars" aria-hidden="true"></span>
						  </a>
						  
						  <h1 class="logo">hamburgers</h1>
						  
						  <nav id="main-menu" role="navigation" class="main-menu" aria-expanded="false" aria-label="Main menu">
						    <a href="#main-menu-toggle"
						       role="button"
						       id="main-menu-close"
						       class="menu-close"
						       aria-expanded="false"
						       aria-controls="main-menu"
						       aria-label="Close main menu">

						      <span class="sr-only">Close main menu</span>
						      <span class="fa fa-close" aria-hidden="true"></span>
						    </a>
						    <ul>
						      <li><a href="/#home">Home</a></li>
						      <li><a href="/#reception">Reception</a></li>
						      <li><a href="/#venue">Venue</a></li>
						      <li><a href="/#info">Parking + Information</a></li>
						      <li><a href="/#registry">Registry</a></li>
{/*						      <li><a href="/#photos">Photos</a></li>  */}
						      <li><a href="/rsvp">RSVP</a></li>
						      <li><a href="/friday">Friday</a></li>
						    </ul>
						  </nav>
						  <a href="#main-menu-toggle"
						     class="backdrop"
						     tabindex="-1"
						     aria-hidden="true" hidden></a>
						</header>
		      </Scrollspy>
		    </div>
    );
  
}

export default Menu;


 					 