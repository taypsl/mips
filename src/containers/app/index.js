import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import Friday from '../friday';
import Rsvp from '../rsvp';
import RsvpFriday from '../rsvp-friday';
// import Headroom from 'react-headroom';
import Menu from '../menu';
import MenuBurger from '../menu-burger';
//import Footer from '../footer';

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
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     auth: false,
  //     slide: 0,  // How much should the Navbar slide up or down
  //     lastScrollY: 0,  // Keep track of current position in state
  //   };
  //   this.handleScroll = this.handleScroll.bind(this)
  // };

  // componentWillMount() {
  //   console.log('componentDidMount')
  //   // When this component mounts, begin listening for scroll changes
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   // If this component is unmounted, stop listening
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = () => {
  //   const { lastScrollY } = this.state; 
  //   const currentScrollY = window.scrollY;


  //   if (currentScrollY > lastScrollY) {
  //     this.setState({ slide: '-40px' });
  //   } else {
  //     this.setState({ slide: '0px' });
  //   }
  //   this.setState({ lastScrollY: currentScrollY });
  // };

  render() {    
    return (
      <div>
        <Menu /> 
        <MenuBurger />

        <div className={`App ${this.props.theme}`}>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/friday" component={Friday} />
            <Route exact path="/rsvp" component={Rsvp} />
            <Route exact path="/rsvp-friday" component={RsvpFriday} />
          </main>
        </div>
        <div className="hidden">
          <p>Roll: {this.props.roll}</p>
          <p>Message: {this.props.message}</p>
          <button className="" onClick={this.props.resetRoll}>Reset Roll</button>
        </div>
        <div className="Die" style={{display:"none"}}>
          <div
            className={`d20 ${this.props.style ? 'rolled' : 'unrolled'}`}
            onClick={this.props.rollDice}
          />
        </div>

{/*        <Footer />
*/}      </div>
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