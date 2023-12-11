import React from 'react';
import CustomSelect from "../UI/customSelect";
import Layout from "../layout/layout";

const TypeOfTour = ({control, setValue}) => {

    const typeTour = [
        {
            value: 'AUTHORS',
            label: 'Авторский'
        },
        {
            value: 'GROUP',
            label: 'Групповой'
        }
    ]

    return (
        <Layout title={'Вид тура'}>
            <CustomSelect label={'Вид тура'} options={typeTour} name={'typeTour'} control={control} setValue={setValue}/>
        </Layout>
    );
};

export default TypeOfTour;
