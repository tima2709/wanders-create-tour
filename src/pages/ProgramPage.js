import React from 'react';
import {Box} from "@mui/material";
import ProgramDays from "../components/program/programDays";

const ProgramPage = ({control, setValue, defaultValues}) => {
    return (
        <Box>
           <ProgramDays control={control} setValue={setValue} defaultValues={defaultValues}/>
        </Box>
    );
};

export default ProgramPage;