import { Component } from "react";
import Option from "./Option";

interface OptionsProps {
    options: string[];
    handleDeleteOptions: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class Options extends Component<OptionsProps> {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                {this.props.options.map(option => <Option key={option} optionText={option} />)}
            </div>
        )
    }
}

export default Options;