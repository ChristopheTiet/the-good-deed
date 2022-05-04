import { Component } from "react";

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

export default Option;