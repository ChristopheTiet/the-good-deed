// const Header = (props: HeaderProps) => (
//     <div>
//         <h1>{props.title}</h1>
//         {props.subtitle && <h2>{props.subtitle}</h2>}
//     </div>
// );

// Header.defaultProps = {
//     title: "Default title",
// };

// export default Header;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Stack } from "@mui/material";

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = (props: HeaderProps) => {
    return (

            <AppBar position="static">
                <Container sx={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Box>
                        <Typography
                            variant="h3"
                            component="div"
                        >
                            { props.title }
                        </Typography>
                        <Typography
                            variant="h6"
                            component="div"
                        >
                            { props.subtitle }
                        </Typography>
                    </Box>
                </Container>

            </AppBar>
    );
};

export default Header;
