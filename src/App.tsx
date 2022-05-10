import { Component } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Action from "./Action";
import AddOption from "./AddOption";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Options from "./Options";
import { Box, Container } from "@mui/material";

interface TheGoodDeedAppProps {
    options: string[];
}

interface TheGoodDeedAppState {
    options: string[];
    selectedOption: string | undefined;
}

class TheGoodDeedApp extends Component<TheGoodDeedAppProps, TheGoodDeedAppState> {
    static defaultProps = {
        options: [],
    };

    state = {
        options: this.props.options,
        selectedOption: undefined,
    };

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
        prevProps: TheGoodDeedAppProps,
        prevState: TheGoodDeedAppState
    ) {
        if (prevState.options.length !== this.state.options.length) {
            const options = JSON.stringify(this.state.options);
            localStorage.setItem("options", options);
        }
    }

    closeOptionModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOption = (optionToRemove: string) => {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option: string) => optionToRemove !== option
            ),
        }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    };

    handleAddOption = (option: string) => {
        if (!option) {
            return "Please enter a value.";
        }
        if (this.state.options.indexOf(option) !== -1) {
            return "This option already exists.";
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    };
    render() {
        const subtitle: string = "Bring good vibes to the world!";
        return (
            <Box sx={{ display:'flex', flexDirection:'column', backgroundColor:'#e1e2e1', width: '100vw', height: '100vh'}}>
                <CssBaseline />
                <Header title="The Good Deed" subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Container sx={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Options
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption}
                        handleDeleteOptions={this.handleDeleteOptions}
                    />
                    <AddOption handleAddOption={this.handleAddOption} />
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        closeOptionModal={this.closeOptionModal}
                    />
                </Container>
            </Box>
        );
    }
}

export default TheGoodDeedApp;
