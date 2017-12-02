import React, { Component } from 'react';
import Particles from './components/Particles';
import Intro from './components/Intro/intro.react';
import Work from './components/Work/work.react';
import About from './components/About/about.react';
import Projects from './components/Projects/projects.react';
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
              <Link to="/work"><a>Work</a></Link>
              <Link to="/projects"><a>Projects</a></Link>
              <Link to="/blog"><a>Blog</a></Link>
            </div>
            <Switch>
              <Route exact path='/' component={Intro}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/work' component={Work}/>
              <Route exact path='/projects' component={Projects}/>
            </Switch>
          </div>
        );
    };
}

export default App;
