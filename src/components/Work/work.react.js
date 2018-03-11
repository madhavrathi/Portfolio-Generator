import React, { Component } from 'react';
import $ from 'jquery';
import info from '../info.js';
import work from '../../images/work.png';

class Work extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'Work | Madhav Rathi';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  render(){

    return(
      <div className='white'>
        <center style={{marginTop: '15px'}}>
          <div className="next-heading white"><h1>Experience</h1></div>
        </center>
        <section id="cd-timeline" className="cd-container">
          {info.experience.map((e) =>{
            return(
              <div key={e.title} className="cd-timeline-block">
                <div className="cd-timeline-img cd-picture">
                  <img src={work} alt='work'></img>
                </div>
                <div className="cd-timeline-content">
                  <h2>{e.title}</h2>
                  <p style={{fontWeight:'bold',marginTop:'-10px'}}>{e.subTitle}</p>
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

export default Work;
