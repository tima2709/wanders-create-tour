import React from 'react';
import {Box} from "@mui/material";
import ProgramDays from "../components/program/programDays";

const ProgramPage = ({control, setValue}) => {
    return (
        <Box>
           <ProgramDays control={control} setValue={setValue}/>
        </Box>
    );
};

export default ProgramPage;