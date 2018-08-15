import React, { Component } from 'react';
import $ from 'jquery';
import education from '../../images/education.png';
import star from '../../images/star.png';
import info from '../info.js';

class About extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'About | Madhav Rathi';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  render(){
    return(
      <div className='white'>
        <center style={{marginTop: '15px'}}>
          <div className="next-heading white"><h1>Education</h1></div>
        </center>
        <section id="cd-timeline" className="cd-container">
          {info.education.map((e) =>{
            return(
              <div key={e.title} className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                  <img src={education} alt='education'></img>
                </div>
                <div className="cd-timeline-content">
                  <h2>{e.title}</h2>
                  <p style={{marginTop:'-10px'}}>{e.subTitle}</p>
                  <p>{e.sum}</p>
                  <span className="cd-date bold">{e.time}</span>
                </div>
              </div>
            )
          })}
        </section>
      </div>
    );
  };

}

export default About;
