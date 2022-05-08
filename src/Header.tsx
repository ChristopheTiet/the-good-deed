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

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = (props: HeaderProps) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ThumbUpAltIcon />

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Good Deeds App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
