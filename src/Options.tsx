import {
    Box,
    Button,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import Option from "./Option";


interface OptionsProps {
    options: string[];
    handleDeleteOption: (option: string) => void;
    handleDeleteOptions: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Options = (props: OptionsProps) => (
    <Container disableGutters
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        {props.options.length === 0 && (
            <Typography color={"error.main"}>
                Please add an option to get started!
            </Typography>
        )}
        {props.options.length !== 0 && (
            <Box sx={{ width: "100%", p: "10px", backgroundColor:"primary.main" }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="h6" sx={{ color:"white"}}>Your options</Typography>
                    <Button
                        sx={{ textTransform: "none" }}
                        color="secondary"
                        onClick={props.handleDeleteOptions}
                    >
                        <Typography>Remove all</Typography>
                    </Button>
                </Stack>
            </Box>
        )}
        <Box sx={{ width: "100%", p: "20px", backgroundColor: "#29b6f6" }}>
            <Stack
                spacing={1}
                divider={<Divider orientation="horizontal" flexItem />}
            >
                {props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
            </Stack>
        </Box>
    </Container>
);

export default Options;
