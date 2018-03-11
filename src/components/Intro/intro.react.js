import React, { Component } from 'react';
import $ from "jquery";
import madhav from '../../images/Madhav.jpeg';
import { Button} from 'semantic-ui-react';
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

          {/* <Modal trigger={(<center>
                            <button className="btn_r btn-1 btn-1e">RESUME</button>
                          </center>)}>
            <Modal.Content image>
              <Image wrapped src={resume} />
            </Modal.Content>
          </Modal> */}
          <center>
            <a target="_blank" href="https://drive.google.com/file/d/1yoF6hRldyzEXjJpUHE3FXRJ_Qn3edVMN/view?usp=sharing" className="btn_r btn-1 btn-1e">RESUME</a>
          </center>



          <center className='bottom_social'>
            <Button className='raise' circular target='_blank' href='https://www.facebook.com/madhav.rathi.9' color='facebook' size='big' icon='facebook' />
            {' '}
            <Button className='raise' circular target='_blank' href='https://twitter.com/mdhvrthi' color='twitter' size='big' icon='twitter' />
            {' '}
            <Button className='raise' circular target='_blank' href='https://github.com/madhavrathi' size='big' icon='github' />
            {' '}
            <Button className='raise' circular target='_blank' href='https://www.linkedin.com/in/madhav-rathi-120b57129/' color='linkedin' size='big' icon='linkedin' />
            {' '}
            <Button className='raise' circular target='_blank' href='https://www.instagram.com/madhav_rathi/' color='instagram' size='big' icon='instagram' />
          </center>
        </div>
      );
  };

}

export default intro;
