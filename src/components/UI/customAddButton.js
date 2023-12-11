import React from 'react';
import {Button} from "@mui/material";
import styles from './uiStyles.module.css'
import PlusIcon from "../icons/plusIcon";

const CustomAddButton = ({label, onClick, type}) => {
    return (
        <>
            <Button
                variant={'outlined'}
                sx={customBtn}
                onClick={onClick}
                type={type}
            >
                <PlusIcon/> <span className={styles.btnSpan}>{label}</span>
            </Button>
        </>
    );
};

export default CustomAddButton;

const customBtn = {
    borderRadius: '10px',
    boxShadow: 0,
    border: '1px solid #0FA958',
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '13px 17px',
    fontSize: '14px',
    fontWight: '900',
    color: '#0FA958',
    '&:hover': {
        backgroundColor: '#ffffff',
        border: '1px solid #0FA958',
    }
}