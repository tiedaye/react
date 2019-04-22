import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/footer.css'
export default class Footer extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    changeColor (index) {
      this.props.changeColor(index)
    }
  render() {
    return (
      <div className='footer' style={{backgroundColor:this.props.list[this.props.bgColor].bgColor}}>
        {this.props.list.map((item, index) => {
           return <NavLink to={item.path} className="footer-module" key={index} onClick={this.changeColor.bind(this,index)}>{item.name}</NavLink>
        })}
      </div>
    )
  }
}
