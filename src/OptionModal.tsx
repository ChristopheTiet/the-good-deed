import Modal from "react-modal";

interface OptionModalProps {
    selectedOption: undefined | string;
    closeOptionModal: () => void;
}

const OptionModal = (props: OptionModalProps) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.closeOptionModal}
    >
        <h3>Selected Option:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.closeOptionModal}>Close</button>
    </Modal>
);

export default OptionModal;
