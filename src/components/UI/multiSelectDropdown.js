import * as React from 'react';
import {Checkbox, ListItemText, Chip, Select, MenuItem, FormControl, Box, InputLabel, OutlinedInput } from "@mui/material";
import {useController} from "react-hook-form";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};




export default function MultiSelectDropdown({options, label, control, setValue, name}) {

    const {
        field: { value },
        fieldState: { invalid, error },
        field,
    } = useController({
        name,
        control,
        defaultValue: [],
    });

    const handleChange = (event) => {
        const {
            target: { value: selectedValues },
        } = event;
        field.onChange(selectedValues)
        if (setValue) {
            setValue( name, selectedValues
                // typeof value === 'string' ? value.split(',') : value,
            );
        }

    };

    return (
        <>
            <FormControl sx={{width: '100%' }}>
                <InputLabel id="Подборки">{label}</InputLabel>
                <Select
                    multiple
                    value={value}
                    onChange={handleChange}
                    sx={{
                        borderRadius: '14px',
                    }}
                    input={<OutlinedInput id="select-multiple-chip" label={label} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    name={name}
                    error={invalid}
                    helperText={error?.message}
                >
                    {options.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            <Checkbox checked={(Array.isArray(value) ? value : []).indexOf(item) > -1} />
                            <ListItemText primary={item} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}