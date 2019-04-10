import React, { Component } from 'react'
import '../css/footer.css'
export default class Footer extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
  render() {
    return (
      <div className='footer'>
        {this.props.list.map((item, index) => {
           return <div className="footer-module" key={index}>{item.name}</div>
        })}
      </div>
    )
  }
}
