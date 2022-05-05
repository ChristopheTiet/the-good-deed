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
    constructor(props: AddOptionProps | Readonly<AddOptionProps>) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            error: undefined,
        };
    }

    handleFormSubmit(e: React.FormEvent<AddOptionFormElement>) {
        e.preventDefault();

        const option = e.currentTarget.elements.option.value;

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        e.currentTarget.elements.option.value = "";
    }

    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddOption;
