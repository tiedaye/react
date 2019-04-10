import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
// const App = () => (
//     <div>This is Home</div>
// )
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'Movie',
            data: 'change',
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
    render () {
        return(
            <div>
                <Header list={this.state.list} data={this.state.data} parentChange={this.parentChange.bind(this)}></Header>
                <Footer list={this.state.list}></Footer>
            </div>
        )
    }
}
export default Home