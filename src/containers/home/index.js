import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from '../form';
import Venue from '../venue';
import Directions from '../directions';
import Fade from 'react-reveal/Fade';

// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter';

const Home = props => (
  <div>
    

    <div className="Home section parallax bg1">
      <Fade duration={3000}>
        <h1 key="home-1">Marilyn & Kip</h1>
      {/* <p>Count: {props.count}</p> */}
        <p className="hidden">
          <button onClick={() => props.changePage()}>
            Go to Friday page via redux
          </button>
        </p>
      </Fade>
    </div>
    

      <div className="Reception section static">
        <Fade duration={3000} style={{overflow: 'hidden'}}>
        <div className="section-font">
          <h1>Reception</h1>
          <p>June 30, 2018</p>
          <p>5:30pm to 8:30pm</p>
          <p>Pasadena City Hall</p>
          <a href="#form">RSVP</a>
        </div>
        </Fade>
      </div>



    <div className="Venue section parallax bg2">
    <Fade duration={3000}>
      <h1>Venue</h1>
    </Fade>
    </div>

    <Venue />
    

    {/*<div className="Registry section static">
      <h1>Registry Info</h1>
    </div>*/}
    <Directions />

    <div className="RSVP section parallax bg5">
      <Fade duration={3000}>
      <h1 className="rsvp-text">RSVP</h1>
{/*     <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0-Wu-CBiVjmq8C0jVe20IHP2OuFSm6JSJGFPp9uA7O4jJMQ/viewform?embedded=true" width="500" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading RSVP Form...</iframe>    */}      <Form />
      </Fade>
    </div>


    <div className="Registry section static bg3">
      <Fade duration={3000}>
      <h1>Registry Info</h1>
      </Fade>
    </div>


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