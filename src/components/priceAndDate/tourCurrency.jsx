import React from 'react';
import Layout from "../layout/layout";
import CustomSelect from "../UI/customSelect";

const TourCurrency = ({control, setValue}) => {

    const currency = [
        {value: 'KGS', label: 'Кыргызский СОМ, "KGS"'},
        {value: 'RUB', label: 'Российский РУБЛЬ, "RUB"'},
        {value: 'USD', label: 'Доллар США, "USD"'},
    ];

    return (
        <Layout title="Валюта тура">
            <CustomSelect options={currency} label="Валюта" setValue={setValue} control={control} name={'currency'}/>
        </Layout>
    );
};

export default TourCurrency;