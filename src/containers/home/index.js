import React from 'react';
import Venue from '../venue';
import Directions from '../directions';
import Registry from '../registry';
// import Footer from '../footer';

// import Transition from 'react-transition-group/Transition';
// import ScrollAnimation from 'react-animate-on-scroll';


const Home = props => (
  <div>


      <div id="home" className="Home section parallax bg1">
          <h1 key="home-1">Kip & Marilyn</h1>
          <p className="hidden">
            <button onClick={() => props.changePage()}>
              Go to Friday page via redux
            </button>
          </p>
      </div>

      <div id="reception" className="Reception section static">
        <div className="reception-leaf"></div>
        <div className="section-font">
          <h1>Reception</h1>
          <p>June 30, 2018</p>
          <p>5:30pm to 8:30pm</p>
          <p>Pasadena City Hall</p>
          
        </div>
        <a href="/rsvp" ><div className="rsvp-btn">RSVP</div></a>
     </div>

      <div id="venue" className="Venue section parallax bg2">
        <h1>Venue</h1>
      </div>
      <Venue />

      <div id="info">
        <Directions  />
      </div>

      <Registry />
      <div className="RSVP section static Blank"></div>

    </div>
);

export default Home;
