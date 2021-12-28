import React, { Component } from 'react';

class HeaderComponent extends Component {

     constructor(props) {
          super(props)
          this.state={
          
          }
     }

     render() {
          return (
               <div className='container'>
                    <header>
                         <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                              <div className='mx-3'><a href='https://www.google.com' className='navbar-brand'>Employee Management App Using React + SpringBoot</a></div>
                         </nav>
                    </header>
               </div>
          );
     }
}

export default HeaderComponent;