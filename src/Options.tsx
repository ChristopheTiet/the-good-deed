import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Option from "./Option";

interface OptionsProps {
    options: string[];
    handleDeleteOption: (option: string) => void;
    handleDeleteOptions: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Options = (props: OptionsProps) => (
    <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
        {props.options.length === 0 && (
            <Typography color={"error.main"}>Please add an option to get started!</Typography>
        )}
        {props.options.length !== 0 && (
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography>Your options</Typography>
                <Button onClick={props.handleDeleteOptions}>Remove all</Button>
            </Stack>
        )}

        {props.options.map((option) => (
            <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </Box>
);

export default Options;
