import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}


class Options extends Component {
  render() {
    return (
      <div>Options</div>
    )
  }
}

class AddOption extends Component {
  render() {
    return (
      <div>Add options</div>
    )
  }
}

function App() {
  return (
   <div>
     <h1>Title</h1>
     <Header/>
     <Action/>
     <Options/>
     <AddOption/>
   </div>)
}

export default App;
