import { Box, Button, Stack, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircle';

type OptionProps = {
    optionText: string;
    handleDeleteOption: (option: string) => void;
};

const Option = (props: OptionProps) => (
    <Box>
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Typography sx={{ wordBreak: "break-all" }} variant="subtitle2">
                {props.optionText}
            </Typography>
            <Button
                size="small"
                sx={{ textTransform: "none" }}
                color="secondary"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                <RemoveCircleOutlineIcon/>
            </Button>
        </Stack>
    </Box>
);

export default Option;
