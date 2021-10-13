import React from 'react';
import './App.css';
import Profile from './profile';

class App extends React.Component {
  state = {
    show : true,
  }

  handleShowPerson = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleShowPerson}>Click here</button>
        {this.state.show && (
          <Profile />
        )}
        <br /> 
      </div>
    )
  }
  
}

export default App;
