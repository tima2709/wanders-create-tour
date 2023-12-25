import React from 'react';
import CustomInput from "../../UI/customInput";
import CustomAddButton from "../../UI/customAddButton";
import {Box, Button} from "@mui/material";
import {useFieldArray} from "react-hook-form";

const NotIncluded = ({control, defaultValues}) => {

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'notIncluded',
        defaultValues
    })

    return (
        <>
            <h3>Оплачивается отдельно</h3>
            {
                fields.map((field, index) => (
                    <Box key={field.id} sx={{display: 'flex', gap: '20px'}}>
                        <CustomInput
                            control={control}
                            type={'text'}
                            label={'Добавить пункт'}
                            name={`notIncluded.${index}.title`}
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

export default NotIncluded;