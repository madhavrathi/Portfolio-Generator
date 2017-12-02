import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import memegenerator from '../../images/memegen.png'
import rgb from '../../images/rgb.png'
import susi from '../../images/susi.png'
import './projects.css';

class Projects extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'Projects | Madhav Rathi';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  render(){
    const back = {
      textColor: '#fff',
      backgroundColor: '#010214'
    }

    return(
      <div className='white'>
        <center style={{marginTop: '15px'}}>
          <div className="next-heading white"><h1>Projects</h1></div>
        </center>
        <div style={{width:'80%', marginLeft: '10%'}} className='project_section'>
          <ul className="cards">
            <li className="cards__item">
              <div className="card">
                <div style={{ backgroundImage: `url(${memegenerator})` }} className="card__image"></div>
                <div className="card__content">
                  <div className="card__title">Meme Generator</div>
                  <div className="language">Android</div>
                  <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                  <button className="btn btn--block card__btn">Button</button>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="card">
                <div style={{ backgroundImage: `url(${susi})` }} className="card__image"></div>
                <div className="card__content">
                  <div className="card__title">SUSI.AI Web Chat Frontend</div>
                  <div className="language">ReactJS</div>
                  <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                  <button className="btn btn--block card__btn">Button</button>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="card">
                <div style={{ backgroundImage: `url(${memegenerator})` }} className="card__image"></div>
                <div className="card__content">
                  <div className="card__title">Meme Generator</div>
                  <div className="language">Android</div>
                  <p className="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
                  <button className="btn btn--block card__btn">Button</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };

}

export default Projects;
