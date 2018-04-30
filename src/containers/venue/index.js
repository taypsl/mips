import React, { Component } from 'react';

export default class Venue extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeId: 'circle-icon-3',
			pressed: true
		}
		this.toggleClass = this.toggleClass.bind(this);
	}

	toggleClass(id) {
		this.setState({ 
			activeId: id,
			pressed: !this.state.pressed 
		});
		// console.log(this.state, 'print this.state for toggleClass')
  }
	

	render() {
		return (
			<div className="Venue section overlay">
	      <h1></h1>
	      <div className="info-container">
	        <div 
	        		className={this.state.activeId == "circle-icon-1" && this.state.pressed == true ? "circle-icon-x circle-icon-1": "circle-icon circle-icon-1"}
	        		onClick={() => this.toggleClass('circle-icon-1')} >

	          <div className={this.state.activeId == "circle-icon-1" && this.state.pressed == true ? "info-box info-box-1": "hidden"} >
	            <h3>By the Numbers</h3>
	            <p>There are 235 rooms inside. The circular tower structure 
	            is six stories high with the fifth story reaching 41 feet high 
	            with four large round arches and four smaller ones, allowing 
	            light and views all around. The sixth story, set back a little, 
	            is 30 feet high and continues with the arches. Above all is the 
	            dome, which is 26 feet high and 54 feet across. A lantern sits 
	            atop the dome, column-supported at 41 feet high, topped with 
	            an urn and ball.</p>
	            <div className="info-box-background"></div>
	          </div>
	        </div>
	        
	        <div 
	        		className={this.state.activeId == "circle-icon-2" && this.state.pressed == true ? "circle-icon-x circle-icon-2": "circle-icon circle-icon-2"}
	        		onClick={() => this.toggleClass('circle-icon-2')} >

	          <div className={this.state.activeId == "circle-icon-2" && this.state.pressed == true ? "info-box info-box-2": "hidden"} >
	            <h3>Pawnee City Hall</h3>
	            <p>PCH doubles as the backdrop for local government firecraker 
	            Leslie Knope and her team of misfit employees on the NBC 
	            sitcom Parks and Recreation.</p>
	            <div className="info-box-img"></div>
	            <div className="info-box-background info-box-background-2"></div>
	          </div>
	        </div>
	        
	        <div 
	        		className={this.state.activeId == "circle-icon-3" && this.state.pressed == true ? "circle-icon-x circle-icon-3": "circle-icon circle-icon-3"}
	        		onClick={() => this.toggleClass('circle-icon-3')}>
	          <div className={this.state.activeId == "circle-icon-3" && this.state.pressed == true ? "info-box info-box-3": "hidden"} >
	            <h3>Pasadena City Hall</h3>
	            <p>Built in 1927, the hall serves as the central location for 
	            city government in the City of Pasadena, California and it 
	            is a significant architectural example of the City Beautiful 
	            movement of the 1920s.</p>
	            <div className="info-box-background info-box-background-3"></div>
	          </div>
	        </div>
	        
	      </div>
			</div>
		)
	}

}