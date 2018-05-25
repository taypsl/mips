import React from 'react';
import { Parallax } from 'react-parallax';

const Friday = () => (
  <div>
  	<div id="friday">
  	<Parallax
          blur={{ min: -10, max: 10 }}
          bgImage={require('../../images/img-mip-3-crop.jpg')}
          bgImageAlt='Kip and Marilyn'
          strength={200}
          bgClassName=''
          bgStyle={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center top' }}
      >
        <h1 className="title">Friday</h1>
        <div style={{ height: '100vh' }} />
      </Parallax>
    </div>

    <div id="sealing" className="Sealing static">
        <div className="sealing-icon"></div>
        <div className="section-font">
          <h1>Sealing Ceremony</h1>
          <p>June 29</p>
          <p>4:00pm</p>
          <p>Guests arrive by 3:30pm</p>
          <p>Los Angeles Temple</p>
          <p>Dinner to follow</p>
          
        </div>
        <a href="/rsvp-friday"><div className="rsvp-btn">RSVP</div></a>
      </div>

      <Parallax
          strength={-200}
          bgImage={require('../../images/img-la@2x.png')}
          bgImageAlt='LA Temple - Rachel McCauley Photography'
          bgClassName=''
          bgStyle={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center top' }}
      >
        <div style={{ height: '70vh' }} />
      </Parallax>

  		<div id="info">

        <div className="Directions-friday">
		      <h1>Parking & Information</h1>
		      <div className="text-group-wrapper">
		        <div className="text-group">
			        <div className="parking-icon parking-icon-lds"></div>
	          <h3>
	            <a 
	              rel="noopener noreferrer"
	              target="_blank" 
	              href="https://www.google.com/maps/dir/''/los+angeles+temple/data=!4m5!4m4!1m0!1m2!1m1!1s0x80c2bb8496a8463b:0xdd290622e0b83d88?sa=X&ved=2ahUKEwi9--ay1vXaAhWJrVQKHdGZCmcQ9RcwAHoECAEQCQ">
	              Los Angeles Temple
	            </a>
	          </h3>
	          <p>10777 Santa Monica Blvd.</p>
	          <p>Los Angeles, CA</p>
	          <p>Enter on Manning Street</p>
	        </div>

	        <div className="text-group">
			        <div className="parking-icon parking-icon-clock"></div>
	          <h3>4:00pm Sealing</h3>
	          <p>Arrive by 3:30</p>
	        </div>

	        <div className="text-group">
			        <div className="parking-icon parking-icon-4"></div>
	          <h3>
	            <a 
	              rel="noopener noreferrer"
	              target="_blank" 
	              href="https://www.google.com/maps/dir/''/10740+Ohio+Ave,+Los+Angeles,+CA+90024/data=!4m5!4m4!1m0!1m2!1m1!1s0x80c2bb8171859c0d:0x8ec3ff516a01cf8a?sa=X&ved=0ahUKEwjinJL06vXaAhWoi1QKHT5CDTEQwwUIKDAA">
	              Dinner
	            </a>
	          </h3>
	          <p>10740 Ohio Ave.</p>
	          <p>Los Angeles, CA</p>
	          <p>(LDS chapel behind temple)</p>
	        </div>
            <div className="reception-leaf-upside"></div>

	       </div>
      </div>
      </div>

       {/*<Footer />*/}
  </div>
);

export default Friday;
