import Option from "./Option";

interface OptionsProps {
    options: string[];
    handleDeleteOption: (option: string) => void;
    handleDeleteOptions: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Options = (props: OptionsProps) => {
    return (
        <div>
            {props.options.length === 0 && (
                <p>Please add an option to get started!</p>
            )}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
        </div>
    );
};

export default Options;
