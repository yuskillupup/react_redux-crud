import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {Link } from 'react-router-dom'
// アクションクリエイター
import { readEvents } from '../actions'



// import PropTypes from 'prop-types'
// import React,{Component} from 'react';

// import './App.css'; 

// class App extends Component{
//   render(){
//       const greeting = "Hi!"
//       const dom = <h1>{greeting}</h1>;
//       return dom;
//     }
// }
// class App extends Component{
//   render(){
//       return(
//         <React.Fragment>
//           <label htmlFor="bar">bar</label>
//           <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//         </React.Fragment>
//       )
//     }
// }

// const App = () => {
//   const profiles = [
//     {name: "Taro", age: 10},
//     {name: "Hanako", age: 20},
//     {name: '??'},
//   ]
//   return(
//     <div>
//       {profiles.map((profile, index) =>{
//         return <User name={profile.name} age={profile.age} key={index} />
//       })}
//     </div>
//   )
// }
// const User = (props) => {
//   return <div>Hi, I am {props.name}, and I am {props.age} years old!</div>
// }

// User.defaultProps = {
//   age: 1
// }

// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }


// const App = () => (<Counter></Counter>)
class EventsIndex extends Component{
  componentDidMount(){
    this.props.readEvents()

  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  // reduxでは不要
  // constructor(props){
  //   super(props)
  //   this.state = { count: 0}
  // }
  // handlePlusButton = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // handleMinusButton = () => {
  //   this.setState({count: this.state.count - 1})
  // }
  render(){
    // const props = this.props
    return(
      <React.Fragment>
        {/* <div>count: {this.state.count}</div> */}
        {/* <div>{console.log(props.events)}</div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Events</Link>

      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
// dispatch無効！！
// const mapDispatchToProps = dispatch => ({
const mapDispatchToProps = ({
  // incrementを引数にdispach->reducerを実行
  readEvents
})
// const mapDispatchToProps = ({ increment, decrement})

// 追加
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

// export default App;
