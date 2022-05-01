import React, { Component } from 'react';

type HeaderProps = {
  title: string;
  subtitle: string;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends Component {
  handlePick() {
    alert('HandlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

type OptionsProps = {
  options: string[];
}

class Options extends Component<OptionsProps> {
  handleRemoveAll() {
    alert('Removed all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map(option => <Option key={option} optionText={option}/>)}
      </div>
    )
  }
}

class AddOption extends Component {
  handleAddOption(e: React.FormEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      option: { value: string };
    };

    const option = target.option.value;

    alert(option)
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
      </form>
    )
  }
}

type OptionProps = {
  optionText: string;
}

class Option extends Component<OptionProps> {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}


function IndecisionApp() {
  const title: string = "Indecision App";
  const subtitle: string = "Put your life in the hands of a computer";
  const options: string[] = ["Thing one", "Thing two", "Thing four"]
  return (
   <div>
     <Header title={title} subtitle={subtitle}/>
     <Action/>
     <Options options={options}/>
     <AddOption/>
   </div>)
}

export default IndecisionApp;
