import React from 'react';
//import Fade from 'react-reveal/Fade';
		
const Registry = props => (
	<div className="Registry section parallax bg5">
    {/*<Fade duration={3000}>*/}
    	<h1>Registry Info</h1>
    {/*</Fade>*/}

    	<div className="text-group-wrapper">
        {/*<Fade duration={2000} delay={1000}>*/}
	        <div className="text-group">
	          <div className="parking-icon registry-icon-1"></div>
	          <h3>
	            <a 
	              rel="noopener noreferrer"
	              target="_blank" 
	              href="https://www.crateandbarrel.com/gift-registry/marilyn-bradford-and-kip-krieger/r5818532">
	              Crate & Barrel
	            </a>
	          </h3>
	        </div>
        {/*</Fade>*/}

        {/*<Fade duration={2000} delay={1350}>*/}
	        <div className="text-group">
	          <div className="parking-icon registry-icon-2"></div>
	          <h3>
	            <a 
	              rel="noopener noreferrer"
	              target="_blank" 
	              href="https://www.amazon.com/wedding/marilyn-bradford-kip-krieger-pasadena-june-2018/registry/3842UXQG1HO1G">
	              Amazon
	            </a>
	          </h3>
	        </div>
        {/*</Fade>*/}

        {/*<Fade duration={2000} delay={1800}>*/}
	        <div className="text-group">
	          <div className="parking-icon registry-icon-3"></div>
	          <h3>
	            <a 
	              rel="noopener noreferrer"
	              target="_blank" 
	              href="http://tgt.gifts/kipandmarilyn">
	              Target
	            </a>
	          </h3>
	        </div>
        {/*</Fade>*/}

        {/*<Fade duration={2000} delay={2150}>*/}
	        <div className="text-group">
	          <div className="parking-icon registry-icon-4"></div>
	          <h3>
	            <a 
	              rel="noopener noreferrer"
	              target="_blank" 
	              href="https://www.givedirectly.org">
	              GiveDirectly
	            </a>
	          </h3>
	          <p>Additionally, we ask that you consider making a contribution to <a 
	          		rel="noopener noreferrer"
	          		target="_blank"
	          		href="https://www.givedirectly.org">givedirectly.org</a> in Kip and Marilyn's name. GiveDirectly gives money to people who need it worldwide.</p>
	        </div>
       {/* </Fade>*/}
        
      </div>

  </div>
);

export default Registry;