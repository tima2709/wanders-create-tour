import React from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import CustomSelect from "../UI/customSelect";
import CustomInput from "../UI/customInput";
import CustomAddButton from "../UI/customAddButton";

const PriceTour = ({control, setValue}) => {

    const insurance = [
        {
            value: 'included',
            label: 'Страховка включена в стоимость тура'
        },
        {
            value: 'not_included',
            label: 'Страховка не включена в стоимость тура',
        },
        {
            value: 'required_not_included',
            label: 'Страховка обязательна и не включена в стоимость тура',
        }
    ]

    return (
        <Layout title="Стоимость">
            <Box>
                <h3>Включено в стоимость</h3>
                <CustomInput control={control} type={'text'} label={'Добавить пункт'} name={'price1'}/>
                <CustomInput control={control} type={'text'} label={'Добавить пункт'} name={'price2'}/>
                <CustomInput control={control} type={'text'} label={'Добавить пункт'} name={'price3'}/>
                <CustomAddButton label="Добавить пункт"/>
            </Box>
            <Box>
                <h3>Оплачивается отдельно</h3>
                <CustomInput control={control} type={'text'} label={'Добавить пункт'} name={'price4'}/>
                <CustomInput control={control} type={'text'} label={'Добавить пункт'} name={'price5'}/>
                <CustomInput control={control} type={'text'} label={'Добавить пункт'} name={'price6'}/>
                <CustomAddButton label="Добавить пункт"/>
            </Box>
            <Box>
                <h3>Условия страхования</h3>
                <CustomSelect control={control} setValue={setValue} name={'insurance'}  label="Тип страхованки" options={insurance}/>
            </Box>
        </Layout>
    );
};

export default PriceTour;