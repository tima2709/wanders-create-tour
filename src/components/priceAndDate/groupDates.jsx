import React from 'react';
import Layout from "../layout/layout";
import {Box, Typography} from "@mui/material";
import CustomInput from "../UI/customInput";

const GroupDates = ({control}) => {
    return (
        <Layout title="Групповые даты">
            <Box sx={{display: 'flex', gap: '20px'}}>
                <Box>
                    <Typography variant={'h6'}>Даты</Typography>
                    <CustomInput
                        label="Дата начала"
                        control={control}
                        name={'startDate'}
                        type={'text'}
                    />
                    <CustomInput
                        label="Дата завершения"
                        control={control}
                        name={'endDate'}
                        type={'text'}
                    />
                    <CustomInput
                        label="Стоимость тура за одного туриста"
                        type="number"
                        control={control}
                        name={'price'}
                    />
                </Box>
                <Box>
                    <Typography variant={'h6'}>Предоплата</Typography>
                    <CustomInput
                        label="За сколько дней до начала тура внести предплату"
                        type="number"
                        control={control}
                        name={'amountOfDays'}
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