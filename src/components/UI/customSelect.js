import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Controller} from "react-hook-form";

const CustomSelect = ({label, options, name, control, setValue}) => {

    return (
        <FormControl sx={{ width: '100%' }}>
            <InputLabel>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({field}) => (
                <Select
                    label={label}
                    onChange={(e) => setValue(name, e.target.value)}
                    {...field}
                    sx={{
                        borderRadius: '14px',
                    }}
                >
                    {
                        options.map((el, idx) => (
                            <MenuItem key={idx} value={el.value}>
                                {el.label}
                            </MenuItem>
                        ))
                    }

                </Select>

            )}/>
        </FormControl>
    );
};

export default CustomSelect;