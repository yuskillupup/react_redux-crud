import React, {Component} from 'react';
import { connect } from 'react-redux'

// アクションクリエイター
import { increment, decrement } from '../actions'
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

class App extends Component{
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
    const props = this.props
    return(
      <React.Fragment>
        {/* <div>count: {this.state.count}</div> */}
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({ value: state.count.value })
const mapDispatchToProps = (dispatch) => ({
  // incrementを引数にdispach->reducerを実行
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
// const mapDispatchToProps = ({ increment, decrement})

// 追加
export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;