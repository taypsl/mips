import React from 'react';
import Directions from '../directions';
import Registry from '../registry';
import Reception from '../reception';
import Gallery from '../gallery';
import { Parallax } from 'react-parallax';

// import Footer from '../footer';

// import Transition from 'react-transition-group/Transition';
// import ScrollAnimation from 'react-animate-on-scroll';


const Home = props => (
  <div id='home'>
    <div className="page">
      <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require('../../images/img-mip1-crop.JPG')}
          bgImageAlt='Marilyn and Kip'
          strength={800}
          bgClassName=''
          bgStyle={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center top' }}
      >
        <h1 key="home-1" className="title">Kip & Marilyn</h1>
        <div style={{ height: '100vh' }} />
      </Parallax>
    </div>
      {/*<div id="home" className=" ">
          <h1 key="home-1">Kip & Marilyn</h1>
          <p className="hidden">
            <button onClick={() => props.changePage()}>
              Go to Friday page via redux
            </button>
          </p>
      </div>*/}

    <Reception />

    <Parallax 
      bgImage={require('../../images/img-pch@2x.png')}
      bgImageAlt='Pasadena City Hall Venue'
      strength={500}
      bgClassName=''
      bgStyle={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center top' }}
      >
      <div id="venue" className="Venue-text" style={{height: '100vh'}}>
        <h1 className="title">Pasadena City Hall</h1>
        {/*<Venue />*/}
      </div>
    </Parallax>


      {/*<div id="venue" className="Venue-img">
        <h1>Venue</h1>
      </div>*/}

      

      <div id="info">
        <Directions  />
      </div>

      <Parallax 
        bgImage={require('../../images/bkgd-transparent@2x.png')}
        bgImageAlt='flowers'
        strength={800}
        bgClassName=''
        bgStyle={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center top' }}
        >
        <div className="flowers" style={{height: '100vh'}}></div>
      </Parallax>

      <Registry />
      <Gallery />      
    </div>
);

export default Home;
