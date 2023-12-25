import React from 'react';
import Layout from "../layout/layout";
import {Box, Typography} from "@mui/material";
import CustomInput from "../UI/customInput";
import {useFieldArray} from "react-hook-form";
import Datepicker from "../UI/DatePicker/Datepicker";

const GroupDates = ({control, defaultValues, setValue}) => {

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'concrete_tour',
        defaultValues
    })

    return (
        <Layout title="Групповые даты">
            <Box >
                <Box>
                    <Typography variant={'h6'}>Даты</Typography>
                    {
                        fields.map((field, index) => (
                            <Box key={field.id} sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <Box sx={datePickerStyle}>
                                    <Datepicker
                                        name={'concrete_tour.0.concrete_tour_date.0.start_date'}
                                        control={control}
                                        label="Дата начала"
                                        setValue={setValue}
                                    />
                                </Box>
                                <Box sx={datePickerStyle}>
                                    <Datepicker
                                        name={'concrete_tour.0.concrete_tour_date.0.end_date'}
                                        control={control}
                                        label="Дата завершения"
                                        setValue={setValue}
                                    />
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box>
                    <CustomInput
                        label="Стоимость тура за одного туриста"
                        type="number"
                        control={control}
                        name={'price_kgz'}
                    />
                    <Typography variant={'h6'}>Предоплата</Typography>
                    <CustomInput
                        label="За сколько дней до начала тура внести предплату"
                        type="number"
                        control={control}
                        name={'prepaymentPeriod'}
                    />
                    <CustomInput
                        label="Размер предоплаты"
                        control={control}
                        name={'prepaymentAmount'}
                    />
                </Box>
            </Box>
            <Box>
                <Typography variant={'h6'}>Места</Typography>
                <CustomInput
                    label="Количество мест всего"
                    type="text"
                    control={control}
                    name={'totalNumberOfSeats'}
                />
            </Box>
        </Layout>
    );
};

export default GroupDates;

const datePickerStyle = {
    width: '339px',
    display: 'flex',
    alignItems: 'center',
    padding: '13px 17px',
    borderRadius: '10px',
    border: '1px solid #282828',
    opacity: '0.6',
}