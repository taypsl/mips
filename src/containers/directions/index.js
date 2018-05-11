import React from 'react';
//import Fade from 'react-reveal/Fade';

const Directions = props => (
	<div className="Directions section static bg3">
      {/*<Fade duration={3000}>*/}
      <h1>Parking & Information</h1>
      {/*</Fade>*/}
      <div className="text-group-wrapper">
        {/*<Fade duration={2000} delay={1000}>*/}
        <div className="text-group">
          <div className="parking-icon parking-icon-1"></div>
          <h3>
            <a 
              rel="noopener noreferrer"
              target="_blank" 
              href="https://www.google.com/maps/dir/''/Pasadena+City+Hall/data=!4m5!4m4!1m0!1m2!1m1!1s0x80c2c36ef70f1f77:0x1f0356aed222f68e?sa=X&ved=0ahUKEwiexdCu3-LaAhVjiFQKHYohAxIQ9RcI1gEwDw">
              Pasadena City Hall
            </a>
          </h3>
          <p>100 Garfield Ave</p>
          <p>Pasadena, CA 91101</p>
        </div>
        {/*</Fade>*/}
        {/*<Fade duration={2000} delay={1350}>*/}
        <div className="text-group">
          <div className="parking-icon parking-icon-2"></div>
          <h3>
            <a 
              rel="noopener noreferrer"
              target="_blank" 
              href="https://www.google.com/maps/dir//330+East+Union+St+Garage,+330+Union+St,+Pasadena,+CA+91101/@34.1466199,-118.1434092,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2c36f1de8e64b:0xf6ffd9c32847ca21!2m2!1d-118.1434092!2d34.1466199">
              E Union Street Garage
            </a>
          </h3>
          <p>330 E Union St</p>
          <p>Pasadena, CA 91101</p>
          <p><i>Street parking around City Hall is free after 5pm</i></p>

        </div>
        {/*</Fade>
        <Fade duration={2000} delay={1700}>*/}
        <div className="text-group">
          <div className="parking-icon parking-icon-3"></div>
          <h3>Courtyard</h3>
          <p>The Reception will be held in the exerior courtyard.</p>
          <p>Dress for outdoors.</p>
        </div>
        {/*</Fade>*/}

        {/*<Fade duration={2000} delay={2000}>*/}
        <div className="text-group">
          <div className="parking-icon parking-icon-4"></div>
          <h3>Dinner</h3>
          <p>Dinner will be served from 5:30pm to 7:30pm.</p> 
        </div>
        {/*</Fade>

        <Fade duration={2000} delay={2300}>*/}
        <div className="text-group">
          <div className="parking-icon parking-icon-5"></div>
          <h3>Dancing</h3>
          <p>Join us for dancing from 7:00pm to 8:30pm</p>
        </div>
        {/*</Fade>*/}

      </div>
    </div>
)

export default Directions