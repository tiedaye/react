import React from 'react'
import Movie from '../views/movie'
import Book from '../views/book';
import Photos from '../views/photos';
import { BrowserRouter as Router ,Route ,withRouter} from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
// const App = () => (
//     <div>This is Home</div>
// )
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: 'change',
            index: 0,
            list:[
                {
                    name:'Movie',
                    bgColor: '#5ccceb',
                    path: ''
                },
                {
                    name:'Books',
                    bgColor: '#d06a60',
                    path: '/book',
                },
                {
                    name:'Photos',
                    bgColor: '#6ec891',
                    path: '/photos'
                }
            ]
        }
    }
    changeColor (index) {
        this.setState({
            index:index
        })
    }
    render () {
        var style = ({
            position:'relative'
        })
        return(
            <Router>
                <div style={style}>
                    <Header list={this.state.list[this.state.index]}></Header>
                    <Route exact path='/' component={Movie}/>
                    <Route path='/book' component={Book}/>
                    <Route path='/photos' component={Photos}/> 
                    <Footer list={this.state.list} bgColor={this.state.index} changeColor={this.changeColor.bind(this)}></Footer>
                </div>
            </Router>
        )
    }
}
export default Home