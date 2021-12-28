import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className='container'>
                <footer className='footer container'>
                    <span className="text-muted">All Rights Reserved 2020 @MyToshika</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent