import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            // title of the website with tipping effect
            <div className='centerDiv'>
                <div className='wrapper'>
                    <div className='static-text'>search any </div>
                    <ul className='dinamic-text'>
                        <li><span> github userss</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
