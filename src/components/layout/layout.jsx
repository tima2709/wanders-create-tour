import React from 'react';
import {Box, Typography} from "@mui/material";
import {titleStyle} from "../UI/helper";

const Layout = ({children, title}) => {
    return (
        <Box sx={layoutStyle}>
            <Box>
                <Typography
                    variant={"h4"}
                    sx={titleStyle}
                >
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    );
};

export default Layout;

const layoutStyle = {
    margin: '30px 0',
    borderRadius: '20px',
    background: '#ffffff',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.10)',
    padding: '20px 20px 40px 20px',
}