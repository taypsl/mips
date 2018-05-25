import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Friday from '../friday';
import Rsvp from '../rsvp';
import RsvpFriday from '../rsvp-friday';
import Headroom from 'react-headroom';
import Menu from '../menu';
import Footer from '../footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  // randomRoll,
  resetRoll,
  rollDice
} from '../../modules/styleSwitcher';

// import { d20 } from '../../images/icn-d20.svg';

//const App = props => (
class App extends Component {
  render() {    
    return (
      <div>
        <Headroom>
          <Menu /> 
        </Headroom>
        {/*<MenuBurger />*/}

        <div className={`App-parallax ${this.props.theme}`}>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/friday" component={Friday} />
            <Route exact path="/rsvp" component={Rsvp} />
            <Route exact path="/rsvp-friday" component={RsvpFriday} />
          </main>
        </div>
        {/*<div className="hidden">
          <p>Roll: {this.props.roll}</p>
          <p>Message: {this.props.message}</p>
          <button className="" onClick={this.props.resetRoll}>Reset Roll</button>
        </div>
        <div className="Die" style={{display:"none"}}>
          <div
            className={`d20 ${this.props.style ? 'rolled' : 'unrolled'}`}
            onClick={this.props.rollDice}
          />
        </div>*/}

        <Footer />
      </div>
    );
  }
}

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