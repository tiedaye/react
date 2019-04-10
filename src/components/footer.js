import React, { Component } from 'react'
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
           return <div className="footer-module" key={index} onClick={this.changeColor.bind(this,index)}>{item.name}</div>
        })}
      </div>
    )
  }
}
