import React, { Component } from 'react';
import Particles from './components/Particles';
import Intro from './components/Intro/intro.react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component{

    render(){
      const particleStyle = {
        position: 'relative',
        zIndex: -100
      }

        return (
          <div>
            <div className='container borderXwidth'>
              <Link to="/"><a>Home</a></Link>
              <Link to="/about"><a>About</a></Link>
              <Link to="/portfolio"><a>Portfolio</a></Link>
              <Link to="/blog"><a>Blog</a></Link>
              <Link to="/contact"><a>Contact</a></Link>
            </div>
            <Switch>
              <Route exact path='/' component={Intro}/>
            </Switch>
          </div>
        );
    };
}

export default App;
