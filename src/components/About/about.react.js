import React, { Component } from 'react';
import $ from 'jquery';
import { Icon } from 'semantic-ui-react';

class About extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'About | Madhav Rathi';
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
          <div className="next-heading white"><h1>Education</h1></div>
        </center>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='student' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>Lovely Public School</h2>
              <p style={{marginTop:'-1px'}}>Laxmi Nagar, New Delhi</p>
              <p>{'The school that gave me my basic schooling from LKG to grade 12, along with great childhood memories of amazing and fun teachers. Graduated with CGPA 10 in class 10 and 95.2% in class 12.'}</p>
              <span className="cd-date bold">{'LKG - XII (CBSE)'}</span>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='student' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>Delhi Technological University</h2>
              <p style={{marginTop:'-1px'}}>Delhi, India</p>
              <p>{'Pursuing my Bachelors with Majors in Electronics. Will be graduating in 2020.'}</p>
              <span className="cd-date bold">{'B.Tech'}</span>
            </div>
          </div>
        </section>
        <center style={{marginTop: '15px'}}>
          <div className="next-heading"><h1>Positions of Responsibility</h1></div>
        </center>
        <div id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='star' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>E-Cell DTU, Co-Head(Design)</h2>
              <ul>
                <li>Making posters for various events of E-Cell DTU</li>
                <li>I use Inkscape for editing posters and templates</li>
              </ul>
              <span className="cd-date bold">{'2016-2017'}</span>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <Icon name='star' size='big' style={iconStyle} />
            </div>
            <div className="cd-timeline-content">
              <h2>IOSD DTU, Co-Head(Mobile Tech.)</h2>
              <ul>
                <li>Organise SIGs on ReactJS and open source technologies like Git.</li>
              </ul>
              <span className="cd-date bold">{'2017-Present'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

}

export default About;
