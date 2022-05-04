import React, { Component } from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";

type IndecisionAppProps = {};

type IndecisionAppState = {
    options: string[];
};

class IndecisionApp extends Component<IndecisionAppProps, IndecisionAppState> {
    constructor(props: IndecisionAppProps | Readonly<IndecisionAppProps>) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: [],
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option: string) {
        if (!option) {
            return "Please enter a value.";
        }
        if (this.state.options.indexOf(option) !== -1) {
            return "This option already exists.";
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option),
            };
        });
    }
    render() {
        const title: string = "Indecision App";
        const subtitle: string = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

export default IndecisionApp;
