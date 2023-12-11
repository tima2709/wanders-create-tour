import React from 'react';
import {Button} from "@mui/material";
import TrashDeleteIcon from "../icons/trashDeleteIcon";
import styles from "./uiStyles.module.css";

const DeleteBtn = ({onClick}) => {
    return (
        <Button sx={customBtn} variant="contained" onClick={onClick}>
            <TrashDeleteIcon/>
            <span className={styles.btnSpan}>Удалить впечатление</span>
        </Button>
    );
};

export default DeleteBtn;


const customBtn = {
    borderRadius: '10px',
    boxShadow: 0,
    backgroundColor: '#ffffff',
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '13px 17px',
    fontSize: '14px',
    fontWight: '900',
    color: '#282828',
    border: '1px solid #282828',
    '&:hover': {
        backgroundColor: '#ffffff'
    }
}