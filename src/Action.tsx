import { Component } from "react";

interface ActionProps {
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
  
export default Action