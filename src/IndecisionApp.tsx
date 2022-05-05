import React, { Component } from "react";
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";

interface IndecisionAppProps {
    options: string[];
}

interface IndecisionAppState {
    options: string[];
}

class IndecisionApp extends Component<IndecisionAppProps, IndecisionAppState> {
    static defaultProps = {
        options: [],
    };
    constructor(props: IndecisionAppProps | Readonly<IndecisionAppProps>) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options,
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            if (json) {
                const options = JSON.parse(json);
                if (options) {
                    this.setState(() => ({ options }));
                }
            }
        } catch {}
    }

    componentDidUpdate(
        prevProps: IndecisionAppProps,
        prevState: IndecisionAppState
    ) {
        if (prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem("options", options);
        }
    }
    handleDeleteOption(optionToRemove: string) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option: string) => optionToRemove !== option
            ),
        }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
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
        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    }
    render() {
        // const title: string = "Indecision App";
        const subtitle: string = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

export default IndecisionApp;
