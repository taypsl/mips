import React from 'react';
import Scrollspy from 'react-scrollspy';

const Menu = props => {
  
    return (
    		<div className="menu" style={props.style}>
		      <Scrollspy items={ ['home', 'reception', 'venue', 'venue', 'info', 'rsvp'] } currentClassName="is-current">
		        <li><a href="#home">Home</a></li>
		        <li><a href="#reception">Reception</a></li>
		        <li><a href="#venue">Venue</a></li>
		        <li><a href="#info">Parking + Info</a></li>
		        <li><a href="#rsvp">RSVP</a></li>
		        {/*<li><a href="#photos">Photos</a></li>*/}
		        <li><a href="/friday">Friday</a></li>
		      </Scrollspy>
		    </div>
    );
  
}

export default Menu;


 					