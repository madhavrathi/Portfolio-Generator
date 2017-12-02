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
        <div>
<ul class="cards">
  <li class="cards__item">
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">Flex</div>
        <p class="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
        <button class="btn btn--block card__btn">Button</button>
      </div>
    </div>
  </li>
</ul>
        </div>
        <center className='project_section'>
          <Card.Group>
            <Card
              centered
              className='white'
              image={susi}
              header='SUSI.AI Web Chat Frontend'
              meta='ReactJS'
              description='Susi is an artificial intelligence combining pattern matching, internet data, data flow principles and inference engine principles.SUSI.AI web chat is a front-end that is developed for web access of SUSI.'
            />
            <Card
              centered
              className='white'
              image={rgb}
              header='RGB Color Game'
              meta='JavaScript'
              description='This is basically a color guessing game based on javascript. There are two levels of the game : EASY and HARD.'
            />
            <Card
              centered
              image={memegenerator}
              header='Meme Generator'
              meta='Android'
              description='Cool Application for creating memes with Top and Bottom Text.'
              extra={(
                <div>
                  <Button primary animated
                    style={{width: '49%', margin:'0px'}}>
                    <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                      <Icon name='right arrow' />
                    </Button.Content>
                  </Button>
                  {' '}
                  <Button secondary animated='vertical'
                    style={{width: '49%', margin:'0px'}}>
                    <Button.Content hidden>Shop</Button.Content>
                    <Button.Content visible>
                      <Icon name='shop' />
                    </Button.Content>
                  </Button>
                </div>
              )}
            />
          </Card.Group>
        </center>
      </div>
    );
  };

}

export default Projects;
