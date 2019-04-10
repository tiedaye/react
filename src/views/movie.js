import React, { Component } from 'react'
import '../css/movie.css'
import 'whatwg-fetch'
export default class Movie extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
  render() {
    return (
      <div className='movieList'>
        <ul className='movieUl'>
        {
             this.props.movieList.map((item,index) => {
                return <li className='movieLi' key={index}>
                        <div className='movieImg'>
                            <img src={item.images.small} alt=''/>
                        </div>
                        <div>
                            <p>{item.title}</p>
                            {
                                item.casts.map((value, idx)=>{
                                    return <p key={idx}>{value.name}</p>
                                })
                            }
                        </div>
                       </li>
                })
        }
        </ul>
      </div>
    )
  }
}
