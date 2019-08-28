import React, { Component } from 'react'
import { Carousel } from 'antd'
import '../css/photos.css'
import 'antd/lib/carousel/style/css'
export default class Photos extends Component {
  render() {
    function onChange(a){
      console.log(a)
    }
    return (
      <div className='photos'>
         <Carousel afterChange={onChange} autoplay>
          <div>
              <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
         </Carousel>
      </div>
    )
  }
}
