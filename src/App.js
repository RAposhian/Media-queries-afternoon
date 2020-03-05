import React, { Component } from 'react';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      dropdownToggle: false
    }

  }

  handleToggle = () =>{
    this.setState({ dropdownToggle: !this.state.dropdownToggle})
  }

    render() {
      return(
       <>
       <header className="main-header">
         <span id="start-text">Start Bootstrap</span>
            {this.state.dropdownToggle
            ?(
              <nav className='nav-menu'>
                <button className='menu-button' onClick={this.handleToggle}>MENU</button>
                <div className='menu-items'>
              
                  <span className="link-spans">SERVICES</span>
                  <span className="link-spans">PORTFOLIO</span>
                  <span className="link-spans">ABOUT</span>
                  <span className="link-spans">TEAM</span>
                  <span className="link-spans">CONTACT</span>
                </div>
              </nav>
            )
            :(
              
              <button className='menu-button' onClick={this.handleToggle}>MENU</button>
              
              )
            }
            <nav className="header-links">
              {/* <span id="start-text">Start Bootstrap</span> */}
              <span className="link-spans">SERVICES</span>
              <span className="link-spans">PORTFOLIO</span>
              <span className="link-spans">ABOUT</span>
              <span className="link-spans">TEAM</span>
              <span className="link-spans">CONTACT</span>
            </nav>
            <div className="body-text">
              <p className="studio-greeting">Welcome To Our Studio!</p>
              <p className="studio-greeting-two">IT'S NICE TO MEET YOU</p>
              <button id='tell-me-more'>TELL ME MORE</button>
            </div>
        </header>
        <section className='services'>
            <div className="service-title">
              <h2>SERVICES</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="floating-boxes">
              <div className="floating">
                <span><FaShoppingCart size={120} color={'rgb(233, 165, 19)'}/></span>
                <h3>E-Commerce</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="floating">
                <span><MdComputer size={120} color={'rgb(233, 165, 19)'}/></span>
                <h3>Responsive Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className="floating">
                <span><FaLock size={120} color={'rgb(233, 165, 19)'}/></span>
                <h3>Web Security</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
        </section>
        </>
      )
    }
}

export default App;
