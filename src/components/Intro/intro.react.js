import React, { Component } from 'react';
import $ from "jquery";
import madhav from '../../images/Madhav.jpeg';
import { Button, Icon } from 'semantic-ui-react';
import './css/intro.css';
class intro extends Component {

  componentDidMount() {
    // Adding title tag to page
    document.title = 'Madhav Rathi';
    //  Scrolling to top of page when component loads
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }
  render(){

      return (
        <div className='section'>
          <center><img className='my_image' src={madhav} alt='Madhav'></img></center>

          <center className="title">
            Hello, I am <span className='name'> Madhav Rathi</span>
          </center>

          <center>
            <a target='_blank' href='https://docs.google.com/document/d/1AvT9Gw0DBPGLelz1AIdB0Clor4Jk2MTZLZZDqTGPO2U/edit?usp=sharing'>
              <button className="btn_r btn-1 btn-1e">RESUME</button>
            </a>
          </center>

          <center className='bottom_social'>
            <Button target='_blank' href='https://www.facebook.com/madhav.rathi.9' color='facebook'>
              <Icon name='facebook' /> Facebook
            </Button>
            {' '}
            <Button target='_blank' href='https://twitter.com/mdhvrthi' color='twitter'>
              <Icon name='twitter' /> Twitter
            </Button>
            {' '}
            <Button target='_blank' href='https://plus.google.com/u/0/101763201361821080686' color='google plus'>
              <Icon name='google plus' /> Google Plus
            </Button>
            {' '}
            <Button target='_blank' href='https://www.linkedin.com/in/madhav-rathi-120b57129/' color='linkedin'>
              <Icon name='linkedin' /> LinkedIn
            </Button>
            {' '}
            <Button target='_blank' href='https://www.instagram.com/madhav_rathi/' color='instagram'>
              <Icon name='instagram' /> Instagram
            </Button>
          </center>
        </div>
      );
  };

}

export default intro;
