import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

export default class MenuBurger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClicked: true,
      // menuLinks: props.menuLinks
    }
    this.menuClosed = this.menuClosed.bind(this)
    this.menuOpened = this.menuOpened.bind(this)
  }

  componentDidMount() {
    // console.log(this.state.menuLinks, "this.state.menuLinks")
  }
  
  menuClosed() {
  	console.log('menuClosed')
    this.setState({ menuClicked: true })
  }

  menuOpened() {
  	console.log('menuOpened')
    this.setState({ menuClicked: false })
  }

	render() {
		return (
			<div className="Menu-burger" >
        {/*this is a hidden checkbox that will receive click*/}
        <input className={this.state.menuClicked ? "Menu-burger-checkbox " : " Menu-burger-checkbox-checked "} type="checkbox" onClick={() => this.menuOpened()} />
        {/*the hamburger part of the menu --->*/}
        <span></span>
        <span></span>
        <span></span>

        <Scrollspy items={ ['home', 'reception', 'venue', 'venue', 'info', 'rsvp'] } currentClassName="is-current" className={this.state.menuClicked ? 'Menu-links-burger-visible' : 'Menu-links-burger'}>
		        <li className='Menu-link-burger' onClick={() => this.menuClosed()}><a href="/#home">Home</a></li>
		        <li className='Menu-link-burger' onClick={() => this.menuClosed()}><a href="/#reception">Reception</a></li>
		        <li className='Menu-link-burger' onClick={() => this.menuClosed()}><a href="/#venue">Venue</a></li>
		        <li className='Menu-link-burger' onClick={() => this.menuClosed()}><a href="/#info">Parking + Info</a></li>
		        <li className='Menu-link-burger' onClick={() => this.menuClosed()}><a href="/rsvp">RSVP</a></li>
		        {/*<li><a href="#photos">Photos</a></li>*/}
		        <li className='Menu-link-burger'><a href="/friday">Friday</a></li>
		     </Scrollspy>

			</div>
		)
	}
}
