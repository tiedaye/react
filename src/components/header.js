import React, { Component } from 'react'
import '../css/header.css'
export default class Header extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    change(params) {
        this.props.parentChange(params)
      }
    render() {
        var style ={
            background:this.props.list.bgColor,
            color:'#fff'
        }
        return (
        <div className='header' style={style} onClick={this.change.bind(this,this.state.text)}>
            {this.props.list.name}
        </div>
        )
    }
}

// Header.defaultProps = {
//     data: 'after changing'
// }
