import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import {
//   increment,
//   incrementAsync,
//   decrement,
//   decrementAsync
// } from '../../modules/counter';

const Home = props => (
  <div>
    <div className="Home section parallax bg1">
      <h1>Home</h1>
      {/*    <p>Count: {props.count}</p>
  */}
      <p>
        <button onClick={() => props.changePage()}>
          Go to Friday page via redux
        </button>
      </p>
    </div>

    <div className="Reception section static">
      <h1>Reception Info</h1>
    </div>

    <div className="Venue section parallax bg2">
      <div className="section parallax bg2-child ">
        <h1>Venue Info</h1>
      </div>
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
