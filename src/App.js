import React, { Component } from 'react';
import './App.css';
import { Result} from './Container/Result.js'
import { Keypad } from './Container/Keypad';
import Clock from './demo.js'; 

class App extends Component{
 constructor()
 {
   super();
   this.state={
     result: ""
   }
 }
 calculate=()=>{
  this.setState({
    // eslint-disable-next-line
    result: (eval(this.state.result) || "" ) + ""
  })
 }
 backSpace=()=>{
  this.setState({
    result: this.state.result.slice(0,-1)
  }) 
 }
 reset=()=>{
   this.setState({
     result: ""
   })
 }
  onClick= (event) =>{
    if(event==="=")
    {
     this.calculate();        
    }
    else if(event==="CE")
    {
      this.backSpace();
    }
    else if(event==="C")
    {
      this.reset();
    }
    else 
    {
    this.setState({
      result: this.state.result+event
    })
  }
}
  render(){
  return (
    <div className="Calculator-body">
      
    </div>
  );
}
}

export default App;
