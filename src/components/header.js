import React, { Component } from 'react'
import '../css/header.css'
export default class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
            text: 'change from child'
        }
    }
    change(params) {
        this.props.parentChange(params)
      }
    render() {
        var style ={
            background:this.props.list[0].bgColor
        }
        return (
        <div className='header' style={style} onClick={this.change.bind(this,this.state.text)}>
            {this.props.data}
        </div>
        )
    }
}

// Header.defaultProps = {
//     data: 'after changing'
// }
