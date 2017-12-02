import React, { Component } from 'react';
import $ from 'jquery';
import { Icon } from 'semantic-ui-react';

class Work extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'Work | Madhav Rathi';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  render(){
    const iconStyle = {
      width: '100%',
      display: 'inline-block',
      margin: '15% auto'
    }

    return(
      <div className='white'>
        <center style={{marginTop: '15px'}}>
          <div className="next-heading white"><h1>Experience</h1></div>
        </center>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='code' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>Google Summer of Code - Intern</h2>
              <p style={{marginTop:'-1px'}}>FOSSASIA</p>
              <p>{'Developed ReactJs based front end for SUSI.AI server. Handled various action types(Map, JSON, table, etc.) from server and displayed data to users as per their queries.'}</p>
              <span className="cd-date bold">{'May 2017 - Aug 2017'}</span>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='code' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>Codeheat - Mentor</h2>
              <p style={{marginTop:'-1px'}}>FOSSASIA</p>
              <p>{'Monitored students’ work at Codeheat (Coding marathon where students from all around the globe participate and contribute to open source projects of FOSSASIA). Winners are invited to FOSSASIA Summit in Singapore to talk about their journey.'}</p>
              <span className="cd-date bold">{'Aug 2017 - Present'}</span>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='code' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>Google Code-In - Mentor</h2>
              <p style={{marginTop:'-1px'}}>FOSSASIA</p>
              <p>{'Mentoring young students(Age: 13 to 17) in their introduction to open source technologies.'}</p>
              <span className="cd-date bold">{'Nov 2017 - Present'}</span>
            </div>
          </div>
        </section>
      </div>
    );
  };

}

export default Work;
