import { Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { height } from "@mui/system";
import { Component } from "react";

interface AddOptionProps {
    handleAddOption: (option: string) => string | undefined;
}

interface AddOptionState {
    error: string | undefined;
}

interface FormElements extends HTMLFormControlsCollection {
    option: HTMLInputElement;
}

interface AddOptionFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

class AddOption extends Component<AddOptionProps, AddOptionState> {
    state = { error: undefined };

    handleFormSubmit = (e: React.FormEvent<AddOptionFormElement>) => {
        e.preventDefault();

        const option = e.currentTarget.elements.option.value;

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        e.currentTarget.elements.option.value = "";
    };

    render() {
        return (
            <Box sx={{ backgroundColor: 'primary.dark'}}>
                {this.state.error && (
                    <Box>
                        <Snackbar open={true} autoHideDuration={6000}>
                            <Alert variant="filled" severity="error">
                                {this.state.error}
                            </Alert>
                        </Snackbar>
                    </Box>
                )}
                <Box
                    component="form"
                    onSubmit={this.handleFormSubmit}
                    sx={{ display: "flex", alignItems: "center", p:"10px" }}
                >
                    <TextField
                        sx={{ mr: "10px", backgroundColor: "white" }}
                        size="small"
                        type="text"
                        name="option"
                        label="Option"
                        color="secondary"
                        variant="filled"
                    />
                    <Button
                        size="small"
                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        <Typography variant="body2">Add Option</Typography>
                    </Button>
                </Box>
            </Box>
        );
    }
}

export default AddOption;
