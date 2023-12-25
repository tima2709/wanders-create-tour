import React from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import CustomSelect from "../UI/customSelect";
import CustomInput from "../UI/customInput";
import CustomAddButton from "../UI/customAddButton";
import {useFieldArray} from "react-hook-form";
import Included from "./includedNotIncluded/included";
import NotIncluded from "./includedNotIncluded/notIncluded";

const PriceTour = ({control, setValue, defaultValues}) => {

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
                <Included control={control} defaultValues={defaultValues}/>
            </Box>
            <Box>
                <NotIncluded control={control} defaultValues={defaultValues}/>
            </Box>
            <Box>
                <h3>Условия страхования</h3>
                <CustomSelect control={control} setValue={setValue} name={'insurance'}  label="Тип страхованки" options={insurance}/>
            </Box>
        </Layout>
    );
};

export default PriceTour;