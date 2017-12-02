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

    const contentStyle = {
      position: 'relative',
      zIndex: 100,
    }

var words = ['an open source enthusiast','a ReactJS lover','a full stack developer'];
var numOfWords = words.length;
var counter = 0;

setInterval(() => {
  //make the fing thing rotate
	$('#spinner').toggleClass('rotate');
	//
}, 1750);

setInterval(() => {

	var coreAnim = () => {
		var live = $('.live');
		var bottom = $('.bottom');

	   //live moves to top and hide
	   live.animate({
			opacity: 0.0,
			marginTop: "-100px"
		}, 1000, 'linear', () => {
			live.removeClass('live').addClass('bottom hidden');
			live.removeAttr('style');
		});
	   //bottom unhide moves to live
	   bottom.text(words[counter]);
	   bottom.removeClass("hidden");
	   bottom.animate({
			opacity: 1.0,
			marginTop: "0px"
		}, 1000, 'linear', () => {
			bottom.removeClass('bottom').addClass('live');
			bottom.removeAttr('style');
		});
	};

	var updateCounter = () => {
		if((counter + 1) == numOfWords){
			counter = 0;
		} else {
			counter++;
		}
	};

	var cleanUp = () => {
		var item = $('.bottom');
		var after = item.next();
		item.insertAfter(after);
	};
	coreAnim();
	updateCounter();
	cleanUp();

}, 3500);

  }

  render(){

      return (
        <div className='section'>
          <img className='my_image' src={madhav} alt='Madhav'></img>
          <div id="centerMe">
            <div className="floatLeft">
              <div className="title">I am Madhav Rathi</div>
              <div id="spinner" className="title rotate">+</div>
            </div>
            <div id="textWrapper">
              <div className="title live">a full stack developer</div>
              <div className="title bottom hidden"></div>
            </div>
          </div>
          <center>
            <Button target='_blank' href='https://www.facebook.com/madhav.rathi.9' color='facebook'>
              <Icon name='facebook' /> Facebook
            </Button>
            <Button target='_blank' href='https://twitter.com/mdhvrthi' color='twitter'>
              <Icon name='twitter' /> Twitter
            </Button>
            <Button target='_blank' href='https://plus.google.com/u/0/101763201361821080686' color='google plus'>
              <Icon name='google plus' /> Google Plus
            </Button>
            <Button target='_blank' href='https://www.linkedin.com/in/madhav-rathi-120b57129/' color='linkedin'>
              <Icon name='linkedin' /> LinkedIn
            </Button>
            <Button target='_blank' href='https://www.instagram.com/madhav_rathi/' color='instagram'>
              <Icon name='instagram' /> Instagram
            </Button>
          </center>
        </div>
      );
  };

}

export default intro;
