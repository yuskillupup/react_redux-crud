import React from 'react';
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

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 20},
    {name: "??"},
  ]
  return(
    <div>
      {profiles.map((profile, index) =>{
        return <User name={profile.name} age={profile.age} key={index} />
      })}
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and I am {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;