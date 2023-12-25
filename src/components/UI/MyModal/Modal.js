import React from 'react';
import {Box} from "@mui/material";
import cl from './myModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <Box className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <Box className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </Box>
        </Box>
    );
};

export default MyModal;