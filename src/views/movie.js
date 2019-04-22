import React, { Component } from 'react'
import '../css/movie.css'
import 'whatwg-fetch'
export default class Movie extends Component {
    constructor (props) {
        super(props)
        this.state = {
            movieList: [],
            isShow:true,
            text: '正在加载中。。。'
        }
    }
    getData(){
        fetch('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.state.movieList.length+ '&count=10', {
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
            this.setState({
                movieList: [...this.state.movieList,...data.subjects]
            })
            console.log(data.subjects)
            if(data.subjects.length<10){
                this.setState({
                    text: '我也是有底线的~'
                })
            }
        }).catch((e)=>{
        
        })
    }
    componentWillMount(){
        this.getData()
  }
    componentDidMount(){
        // try{
        //     let doc = document.getElementById('movie')
        //     if(doc){
        //         new Promise((resolve,reject)=>{
        //             this.getData()
        //             resolve(2222)
        //             reject(333)
        //         }).then((value)=>{
        //             alert(value)
        //             // doc.addEventListener('scroll', this.handleScroll(this),false) 
        //             document.querySelector('.movieLi').addEventListener('click', this.handleScroll.bind(this),false) 
        //             alert('success')
        //         }).catch((e)=>{
        //             console.log(e)
        //         })
        //     }
        // }catch(e){
        //     console.log(e)
        // }
        window.addEventListener('scroll',()=>{
            var scrollTop = document.documentElement.scrollTop;
            var scrollHeight = document.documentElement.scrollHeight;
            var clientHeight = document.documentElement.clientHeight;
            if(scrollTop+clientHeight+1>scrollHeight){
                this.setState({
                    isShow: !this.state.isShow
                })
                console.log(scrollTop,scrollHeight,clientHeight)
                console.log('scrolling')
                this.getData()
                this.setState({
                    isShow: !this.state.isShow
                })
            }
        }) 
        
    }
    componentWillUnmount() {
        let doc = window.document.getElementById('movie')
        if(doc){
            doc.removeEventListener('scroll',this.handleScroll,false)
        }
    }
    handleScroll(){

        let doc = document.getElementsByClassName('movieUl')[0]
        let scrollTop = doc.scrollTop
        let scrollHeight = doc.scrollHeight
        let clientHeight = doc.clientHeight
        console.log(scrollTop,scrollHeight,clientHeight)
        if (scrollHeight - scrollTop  -10 < clientHeight) {
            // this.getData()
            console.log(333)
        }
        // console.log(arguments[0])
        // arguments[0].stopPropagation(); // 可以阻止事件冒泡
        // window.event.stopPropagation() 
    }
  render() {
      let Load = null
      let style = {color:'rgba(0,0,0,0.4)',textAlign:'center'}
      if (this.state.isShow) {
         Load = <p style={style}>{this.state.text}</p>
      }
    return (
      <div className='movieList'>
        <ul className='movieUl' id='movie'>
        {
             this.state.movieList.map((item,index) => {
                return <li className='movieLi' key={index}>
                            <div className='movieImg'>
                                <img src={item.images.small} alt=''/>
                            </div>
                            <div>
                                <p className='movieTitle'>{item.title}</p>
                                {
                                    item.casts.map((value, idx)=>{
                                        return <p key={idx} className='movieActor'>{value.name}</p>
                                    })
                                }
                            </div>
                       </li>
                })
        }
            {Load}
        </ul>
      </div>
    )
  }
}
