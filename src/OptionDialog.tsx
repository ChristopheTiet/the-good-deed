import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';

interface OptionDialogProps {
    selectedOption: undefined | string;
    closeOptionDialog: () => void;
}

const OptionDialog = (props: OptionDialogProps) => (
    <Dialog
        open={!!props.selectedOption}
        onClose={props.closeOptionDialog}
    >
        <DialogTitle>
            <Typography>Good deed of the day</Typography>
        </DialogTitle>
        <DialogContent>
            {props.selectedOption && <Typography variant="h6">{props.selectedOption}</Typography>}
        </DialogContent>
        <DialogActions>
            <Button variant="contained"  onClick={props.closeOptionDialog}>Close</Button>
        </DialogActions>
    </Dialog>
);

export default OptionDialog;
