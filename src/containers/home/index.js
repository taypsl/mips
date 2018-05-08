import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Form from '../form';
import Venue from '../venue';
import Directions from '../directions';
import Registry from '../registry';
import Footer from '../footer';

// import Transition from 'react-transition-group/Transition';
// import ScrollAnimation from 'react-animate-on-scroll';

// import Fade from 'react-reveal/Fade';


// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter';
// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered:  { opacity: 1 },
// };


const Home = props => (
  <div>


      <div id="home" className="Home section parallax bg1">
        {/*<Fade duration={3000}>*/}
          <h1 key="home-1">Marilyn & Kip</h1>
        {/* <p>Count: {props.count}</p> */}
          <p className="hidden">
            <button onClick={() => props.changePage()}>
              Go to Friday page via redux
            </button>
          </p>
        {/*</Fade>*/}
      </div>

      <div id="reception" className="Reception section static">
{/*        <Fade duration={3000} style={{overflow: 'hidden'}}>
*/}        <div className="reception-leaf"></div>
        <div className="section-font">
          <h1>Reception</h1>
          <p>June 30, 2018</p>
          <p>5:30pm to 8:30pm</p>
          <p>Pasadena City Hall</p>
          
        </div>
        <a href="/rsvp" ><div className="rsvp-btn">RSVP</div></a>
{/*        </Fade>
*/}      </div>

      <div id="venue" className="Venue section parallax bg2">
        {/*<Fade duration={3000}>*/}
          <h1>Venue</h1>
        {/*</Fade>*/}
      </div>
      <Venue />


      {/*<div className="Registry section static">
        <h1>Registry Info</h1>
      </div>*/}

      <div id="info">
        <Directions  />
      </div>

      {/*<div id="rsvp" className="RSVP section parallax bg5">
        <h1 className="rsvp-text">RSVP</h1>
        <Form />
      </div>*/}
      <div className="RSVP section parallax bg5"></div>
     
      <Registry />

       <Footer />
  </div>
);

const mapStateToProps = state => ({
  // count: state.counter.count,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // increment,
      // incrementAsync,
      // decrement,
      // decrementAsync,
      changePage: () => push('/friday')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/*
<p>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>
    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </p>
*/