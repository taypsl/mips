import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from '../form';
import Venue from '../venue';
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter';

const Home = props => (
  <div>
    <div className="Home section parallax bg1">
      <h1>Marilyn + Kip</h1>
      {/*    <p>Count: {props.count}</p>
  */}
      <p className="hidden">
        <button onClick={() => props.changePage()}>
          Go to Friday page via redux
        </button>
      </p>
    </div>

    <div className="Reception section static">
      <div className="section-font">
        <h1>Reception</h1>
        <p>June 30, 2018</p>
        <p>4:30pm to 8:30pm</p>
        <p>Pasadena City Hall</p>
        <a href="#form">RSVP</a>
      </div>
    </div>

    <div className="Venue section parallax bg2">
      <h1>Venue</h1>
    </div>
    <Venue />
    

    {/*<div className="Registry section static">
      <h1>Registry Info</h1>
    </div>*/}
    <div className="Directions section static bg3">
      <h1>Directions + Parking</h1>
      <div className="text-group-wrapper">
        <div className="text-group">
          <h3>City Hall</h3>
          <p>100 Garfield Ave</p>
          <p>Pasadena, CA 91101</p>
        </div>
        <div className="text-group">
          <h3>Parking Garage</h3>
          <p>330 E Union St</p>
          <p>Pasadena, CA 91101</p>
        </div>
        <div className="text-group">
          <h3>Parkopedia Parking Locator</h3>
          <p>
            <a href="https://en.parkopedia.com/parking/building/pasadena-city-hall-los-angeles-ca/?arriving=201804261130&leaving=201804261330">
          Search available parking spaces </a>
          near Pasadena City Hall
          </p>
        </div>
      </div>
    </div>

    <div className="RSVP section parallax bg5">
      <h1 className="rsvp-text">RSVP</h1>
    {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0-Wu-CBiVjmq8C0jVe20IHP2OuFSm6JSJGFPp9uA7O4jJMQ/viewform?embedded=true" width="500" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading RSVP Form...</iframe> */}   
      <Form />
    </div>


    <div className="Registry section static bg3">
      <h1>Registry Info</h1>
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