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
                  <p className="card__text">Cool Application for creating memes with Top and Bottom Text. Different Images can be loaded. This is still in development </p>
                  <center>
                    <a target='_blank' href='https://github.com/madhavrathi/Memegenerator'><button className="btn draw-border">{<Icon name='github' size='large' />} GITHUB</button></a>
                  </center>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="card">
                <div style={{ backgroundImage: `url(${susi})` }} className="card__image"></div>
                <div className="card__content">
                  <div className="card__title">SUSI.AI Web Chat Frontend</div>
                  <div className="language">ReactJS</div>
                  <p className="card__text">Susi is an artificial intelligence combining pattern matching, internet data, data flow principles and inference engine principles.SUSI.AI web chat is a front-end that is developed for web access of SUSI. </p>
                  <center>
                    <a target='_blank' href='https://github.com/fossasia/chat.susi.ai'> <button className="btn draw-border">{<Icon name='github' size='large' />} GITHUB</button></a>
                    <a target='_blank' href='https://chat.susi.ai/'><button className="btn draw-border">{<Icon name='world' size='large' />} LIVE</button></a>
                  </center>
                </div>
              </div>
            </li>
            <li className="cards__item">
              <div className="card">
                <div style={{ backgroundImage: `url(${rgb})` }} className="card__image"></div>
                <div className="card__content">
                  <div className="card__title">RGB Color Game</div>
                  <div className="language">JavaScript</div>
                  <p className="card__text">This is basically a color guessing game based on javascript. There are two levels of the game : EASY and HARD. </p>
                  <center>
                    <a target='_blank' href='https://github.com/madhavrathi/rgbColourGame'><button className="btn draw-border">{<Icon name='github' size='large' />} GITHUB</button></a>
                    <a target='_blank' href='https://madhavrathi.github.io/rgbColourGame/'><button className="btn draw-border">{<Icon name='world' size='large' />} LIVE</button></a>
                  </center>
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
