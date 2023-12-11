import React from 'react';
import Layout from "../layout/layout";
import CustomSelect from "../UI/customSelect";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";

const CollectionPoint = ({control, setValue}) => {

    const listOfCities = [
        {
            value: 'bishkek',
            label: 'Бишкек'
        },
        {
            value: 'almaty',
            label: 'Алматы'
        },
        {
            value: 'tashkent',
            label: 'Ташкент'
        },


    ]

    return (
        <Layout title="Точка сбора">
            <CustomSelect options={listOfCities} label="Города" control={control} setValue={setValue} name={'collectionPointCity'}/>
            <h5>Комментарий для туриста</h5>
            <DescReactQuill control={control} setValue={setValue} name={'collectionPointDesc'}/>
        </Layout>
    );
};

export default CollectionPoint;