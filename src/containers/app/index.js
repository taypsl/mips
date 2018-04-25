import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Friday from '../friday';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  // randomRoll,
  resetRoll,
  rollDice
} from '../../modules/styleSwitcher';

// import { d20 } from '../../images/icn-d20.svg';

const App = props => (
  <div className={`App ${props.theme}`}>
    <header>
      <Link to="/">Home</Link>
      <Link to="/friday">Friday</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/friday" component={Friday} />
    </main>
    <div className="Die">
      <p>Roll: {props.roll}</p>
      <p>Message: {props.message}</p>

      <div
        className={`d20 ${props.style ? 'rolled' : 'unrolled'}`}
        onClick={props.rollDice}
      />
      <button onClick={props.resetRoll}>Reset Roll</button>
      {console.log(props.theme, 'props.theme')}
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
