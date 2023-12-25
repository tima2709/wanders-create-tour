import React from 'react';
import Layout from "../layout/layout";
import CustomSelect from "../UI/customSelect";
import {Box} from "@mui/material";
import CustomInput from "../UI/customInput";

const AboutTour = ({control, setValue}) => {


    const languages = [
        {value: 'Russian', label: 'Русский'},
        {value: 'English', label: 'Английский'},
        {value: 'Kyrgyz', label: 'Кыргызский'}
    ]


    return (
        <Layout title={'Расскажите о вашем туре'}>
            <Box sx={{paddingBottom: '10px'}}>
                <CustomInput
                    typeInput="text"
                    label={'Название тура'}
                    control={control}
                    name={'nameOfTheTour'}
                />
            </Box>
            <Box sx={boxStyles}>
                <Box sx={col6}>
                    <Box sx={boxRight}>
                        <CustomSelect
                            options={languages}
                            label={"Языки"}
                            name={'language'}
                            control={control}
                            setValue={setValue}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxLeft}>
                        <CustomInput
                            type="number"
                            label={'Количество дней'}
                            control={control}
                            name={'amountOfDays'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxRight}>
                        <CustomInput
                            type="number"
                            label={'Мин. человек в группе'}
                            control={control}
                            name={'minPeople'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxLeft}>
                        <CustomInput
                            type="number"
                            label={'Макс. человек в группе'}
                            control={control}
                            name={'maxPeople'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxRight}>
                        <CustomInput
                            type="number"
                            label={'Мин. возраст, лет'}
                            control={control}
                            name={'min'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                   <Box sx={boxLeft}>
                       <CustomInput
                           type="number"
                           label={"Макс. возраст, лет"}
                           control={control}
                           name={'max'}
                       />
                   </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default AboutTour;

const boxStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
}

const col6 = {
    width: '50%',
}

const boxLeft = {
    padding: '10px 0 10px 0',
    marginLeft: '10px'
}

const boxRight = {
    padding: '10px 0 10px 0',
    marginRight: '10px'
}