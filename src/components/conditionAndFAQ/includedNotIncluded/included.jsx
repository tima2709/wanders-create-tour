import React from 'react';
import CustomInput from "../../UI/customInput";
import CustomAddButton from "../../UI/customAddButton";
import {useFieldArray} from "react-hook-form";
import {Button, Box} from "@mui/material";

const Included = ({control, defaultValues}) => {

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'included',
        defaultValues
    })

    return (
        <>
            <h3>Включено в стоимость</h3>
            {
                fields.map((field, index) => (
                    <Box key={field.id} sx={{display: 'flex', gap: '20px'}}>
                        <CustomInput
                            control={control}
                            type={'text'}
                            label={'Добавить пункт'}
                            name={`included.${index}.title`}
                        />
                        <Button variant={'outlined'} type="button" onClick={() => remove(index)}>
                            Удалить
                        </Button>
                    </Box>
                ))
            }

            <CustomAddButton
                label="Добавить пункт"
                type={'button'}
                onClick={() => append({title: ''})}
            />
        </>
    );
};

export default Included;