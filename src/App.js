import React,{Component} from 'react';

// import './App.css'; 

// class App extends Component{
//   render(){
//       const greeting = "Hi!"
//       const dom = <h1>{greeting}</h1>;
//       return dom;
//     }
// }
class App extends Component{
  render(){
      return(
        <React.Fragment>
          <label htmlFor="bar">bar</label>
          <input type="text" onChange={() => {console.log("I am clicked!")}}/>
        </React.Fragment>
      )
    }
}

export default App;
