import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Movie from './movie'
// const App = () => (
//     <div>This is Home</div>
// )
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'Movie',
            data: 'change',
            movieList: [],
            index: 0,
            list:[
                {
                    name:'Movie',
                    bgColor: '#5ccceb'
                },
                {
                    name:'Books',
                    bgColor: '#d06a60'
                },
                {
                    name:'Photos',
                    bgColor: '#6ec891'
                }
            ]
        }
    }
    parentChange (pramas) {
        this.setState({
            data: pramas
        })
    }
    changeColor (index) {
        this.setState({
            index:index
        })
    }
    componentWillMount(){
        fetch('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.state.movieList.length+ '&count=5', {
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
            this.setState({
                movieList: [...this.state.movieList,...data.subjects]
            })
            console.log(this.state.movieList)
        }).catch((e)=>{
            console.log(e)
        })
  }
    render () {
        var style = ({
            position:'relative'
        })
        return(
            <div style={style}>
                <Header list={this.state.list[this.state.index]} parentChange={this.parentChange.bind(this)}></Header>
                <Movie movieList={this.state.movieList}></Movie>
                <Footer list={this.state.list} bgColor={this.state.index} changeColor={this.changeColor.bind(this)}></Footer>
            </div>
        )
    }
}
export default Home