import React, {Component} from 'react';
import Title from './components/Title'
import Scoreboard from './components/Scoreboar'

class App extends Component {
  render(){
    return (
      <div>
      <h1>hello App</h1>
      <Title  content="This is Player Scoreboard  "/>
      <Scoreboard />
        
      
      </div>
    );

  }
  
}

export default App;
