import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Friday from '../friday';
import Scrollspy from 'react-scrollspy'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  // randomRoll,
  resetRoll,
  rollDice
} from '../../modules/styleSwitcher';

// import { d20 } from '../../images/icn-d20.svg';

const App = props => (
  <div>
    {/*<header>
      <Link to="/">Home</Link>
      <Link to="/friday">Friday</Link>
    </header>*/}
    <div className="menu">
      <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
        <li><a href="#home">Home</a></li>
        <li><a href="#reception">Reception</a></li>
        <li><a href="#venue">Venue</a></li>
        <li><a href="#info">Parking + Info</a></li>
        <li><a href="#rsvp">RSVP</a></li>
        <li><a href="#rsvp">Photos</a></li>
        <li><a href="/friday">Friday</a></li>
      </Scrollspy>
    </div>

    <div className={`App ${props.theme}`}>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/friday" component={Friday} />
      </main>
    </div>
    <div className="hidden">
      <p>Roll: {props.roll}</p>
      <p>Message: {props.message}</p>
      <button className="" onClick={props.resetRoll}>Reset Roll</button>
    </div>
    <div className="Die">
        <div
          className={`d20 ${props.style ? 'rolled' : 'unrolled'}`}
          onClick={props.rollDice}
        />
        {/*what if on button click, state updates, another function is triggered adn after 1 second, prop.style becomes "unrolled" again?*/}
        
    </div>
  </div>
);

const mapStateToProps = state => ({
  // count: state.counter.count,
  roll: state.styleSwitcher.rollNumber,
  message: state.styleSwitcher.message,
  theme: state.styleSwitcher.theme,
  style: state.styleSwitcher.style
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      rollDice,
      // randomRoll,
      resetRoll
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);