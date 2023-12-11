import React from 'react';
import {Button} from "@mui/material";
import UploadIcon from "../icons/uploadIcon";
import styles from './uiStyles.module.css'


const CustomBlackUploadBtn = () => {


    return (
        <Button
            variant="contained"
            sx={customBtn}
        >
            <UploadIcon/>
            <span className={styles.btnSpan}>Загрузить</span>
        </Button>
    );
};

export default CustomBlackUploadBtn;


const customBtn = {
    borderRadius: '10px',
    boxShadow: 0,
    backgroundColor: '#282828',
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '13px 17px',
    fontSize: '14px',
    fontWight: '900',
    minWidth: '176px',
    '&:hover': {
        backgroundColor: '#282828'
    }
}