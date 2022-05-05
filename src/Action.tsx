interface ActionProps {
    hasOptions: boolean;
    handlePick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Action = (props: ActionProps) => (
    <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>
            What should I do?
        </button>
    </div>
);

export default Action;
