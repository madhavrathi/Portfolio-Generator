import React, { Component } from 'react';
import Intro from './components/Intro/intro.react';
import Work from './components/Work/work.react';
import About from './components/About/about.react';
import Projects from './components/Projects/projects.react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import $ from "jquery";
import './App.css';

class App extends Component{

  componentDidMount() {
    $('.menu').on('click', function(e){
       $(this).toggleClass('active');
       $(this).siblings('.fullscreen-menu').toggleClass('active');
    });
  }

    render(){
        return (
          <div>
            <div>
              <div className="header">
                <div className="menu-container">
                  <div className="menu"></div>
                  <div className="fullscreen-menu">
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/about'>About</a></li>
                      <li><a href='/work'>Work</a></li>
                      <li><a href='/projects'>Projects</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='container borderXwidth'>
                <Link to="/"><a>Home</a></Link>
                <Link to="/about"><a>About</a></Link>
                <Link to="/work"><a>Work</a></Link>
                <Link to="/projects"><a>Projects</a></Link>
              </div>
              <Switch>
                <Route exact path='/' component={Intro}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/work' component={Work}/>
                <Route exact path='/projects' component={Projects}/>
              </Switch>
            </div>

          </div>
        );
    };
}

export default App;
