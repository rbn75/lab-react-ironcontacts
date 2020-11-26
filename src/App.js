import React, {Component} from 'react';
import contacts from './contacts.json'
import Agenda from './components/Agenda';

import './App.css';


class App extends Component {
  state={
    AgendaShowing: contacts.slice(0,5)
  }
  addRandom = () => {
    const displayFive = [...this.state.AgendaShowing]
    const random = contacts[Math.floor(Math.random()*contacts.length)]
    if(!displayFive.includes(random)){
      displayFive.push(random)
    }
  this.setState({
    AgendaShowing:displayFive
  })
  
  }
  sortName = () => {
    const displayFive = [...this.state.AgendaShowing]
    displayFive.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  
    this.setState({
      AgendaShowing: displayFive
    })
  }
  
  sortPopularity = () =>{
    const displayFive = [...this.state.AgendaShowing]
    displayFive.sort(function(a, b){
      if(a.popularity < b.popularity) { return -1; }
      if(a.popularity > b.popularity) { return 1; }
      return 0;
  })
  this.setState({
    AgendaShowing: displayFive
  })
    
  }
  
  render(){
    return (
   <div className="App">
        <h1>Iron contacts</h1>
        <button onClick={()=>this.addRandom()}>Add random contact</button>
        <button onClick={()=>this.sortName()}>Sort by name</button>
        <button onClick={()=>this.sortPopularity()}>Sort by popularity</button>
        {this.state.AgendaShowing.map(oneActor=>{
          return(
            <Agenda
            key={oneActor.id}
            {...oneActor}/>
          )
        })}
      </div>
    );
  }
   
  }
  
  export default App;

