import React, { Component } from 'react';
import info from '../info.js';
import $ from 'jquery';
import { Icon } from 'semantic-ui-react'
import './projects.css';

class Projects extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'Projects | Madhav Rathi';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  render(){

    return(
      <div className='white'>
        <center style={{marginTop: '15px'}}>
          <div className="next-heading white"><h1>Projects</h1></div>
        </center>
        <div style={{width:'80%', marginLeft: '10%'}} className='project_section'>
          <ul className="cards">
            {info.projects.map((e) =>{
              return(
                <li key={e.title} className="cards__item">
                  <div className="card">
                    <div style={{ backgroundImage: `url(${e.image})` }} className="card__image"></div>
                    <div className="card__content">
                      <div className="card__title">{e.title}</div>
                      <div className="language">{e.subTitle}</div>
                      <p className="card__text">{e.sum}</p>
                      <center>
                        <a rel="noopener noreferrer" target='_blank' href={e.github}><button className="btn draw-border">{<Icon name='github' size='large' />} GITHUB</button></a>
                        {(e.live !== '')?<a rel="noopener noreferrer" target='_blank' href={e.live}><button className="btn draw-border">{<Icon name='world' size='large' />} LIVE</button></a>:''}
                      </center>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  };

}

export default Projects;
