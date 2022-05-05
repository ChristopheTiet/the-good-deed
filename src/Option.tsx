type OptionProps = {
    optionText: string;
    handleDeleteOption: (option: string) => void;
};

const Option = (props: OptionProps) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Option;
