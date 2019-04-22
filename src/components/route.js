import React, { Component } from 'react'
import Movie from '../views/movie'
import Book from '../views/book';
import Photos from '../views/photos';
import { BrowserRouter as Router, Route} from 'react-router-dom'
export default class RouteModle extends Component {
    constructor (props) {
        super(props)
        this.state = {
            
        }
    }
  render() {
    return (
        <Router>
             <div>
                <Route exact path='/' component={Movie}/>
                <Route path='/book' component={Book}/>
                <Route path='/photos' component={Photos}/>               
            </div>
        </Router>
     
    )
  }
}
