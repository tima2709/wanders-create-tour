import React from 'react';
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";


const CustomInput = ({label, control, name, type}) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({field}) => {
                    return (
                        <TextField
                            label={label}
                            type={type}
                            variant="outlined"
                            value={field.value}
                            size="medium"
                            sx={{width: '100%'}}
                            InputProps={{
                                sx: {
                                    borderRadius: '14px'
                                }
                            }}
                            {...field}
                        />
                    )
                }}

            />
        </>
    );
};

export default CustomInput;

