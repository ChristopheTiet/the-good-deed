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

type ActionProps = {
  hasOptions: boolean;
  handlePick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class Action extends Component<ActionProps>{
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

type OptionsProps = {
  options: string[];
  handleDeleteOptions: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class Options extends Component<OptionsProps> {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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

type IndecisionAppProps = {}

type IndecisionAppState = {
  options: string[];
}

class IndecisionApp extends Component<IndecisionAppProps, IndecisionAppState>{
  constructor(props: IndecisionAppProps | Readonly<IndecisionAppProps>){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state ={
      options: [
        "Thing one", "Thing two", "Thing four"
      ]
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options:[]
      }
    })
  }

  handlePick() {
    const randomNum = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title: string = "Indecision App";
    const subtitle: string = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption/>
      </div>)
  } 
}

export default IndecisionApp;
