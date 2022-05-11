import { Button, Container, Typography } from "@mui/material";

interface ActionProps {
    hasOptions: boolean;
    handlePick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Action = (props: ActionProps) => (
    <Container sx={{ display: 'flex', justifyContent:'center'}}>
        <Button 
            color="success"
            variant="contained"
            onClick={props.handlePick} 
            disabled={!props.hasOptions}
            sx={{m:2, px:10, py: 4}}
            size="large">
                <Typography>
                     Do a good deed
                </Typography>
        </Button>
    </Container>
);

export default Action;
