import React, { Component } from 'react';
import $ from "jquery";
import madhav from '../../images/Madhav.jpg';
import { Button} from 'semantic-ui-react';
import './css/intro.css';
import info from '../info.js';
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
            <span className="main_title">madhav rathi</span>
            <p>{'{developer & caffeine addict}'}</p>

          </center>
          {/* <Modal trigger={(<center>
                            <button className="btn_r btn-1 btn-1e">RESUME</button>
                          </center>)}>
            <Modal.Content image>
              <Image wrapped src={resume} />
            </Modal.Content>
          </Modal> */}
          <center>
            <a target="_blank" href="https://drive.google.com/file/d/1xPN9MYvrsqsSmtpkPQdCJznX_-rxB_ca/view" className="btn_r btn-1 btn-1e">RESUME</a>
          </center>
          <center className='bottom_social'>
            {(info.social.facebook !== '')?<Button className='raise' circular target='_blank' href={info.social.facebook} color='facebook' size='big' icon='facebook' />:''}
            {' '}
            {(info.social.twitter !== '')?<Button className='raise' circular target='_blank' href={info.social.twitter} color='twitter' size='big' icon='twitter' />:''}
            {' '}
            {(info.social.github !== '')?<Button className='raise' circular target='_blank' href={info.social.github} size='big' icon='github' />:''}
            {' '}
            {(info.social.linkedin !== '')?<Button className='raise' circular target='_blank' href={info.social.linkedin} color='linkedin' size='big' icon='linkedin' />:''}
            {' '}
            {(info.social.instagram !== '')?<Button className='raise' circular target='_blank' href={info.social.instagram} color='instagram' size='big' icon='instagram' />:''}
          </center>
        </div>
      );
  };
}
export default intro;
