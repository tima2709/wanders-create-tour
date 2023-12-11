import React from 'react';
import Layout from "../layout/layout";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";

const Recommendations = ({control, setValue}) => {
    return (
        <Layout title="Рекомендации для покупки билетов">
            <p>Расскажите туристам, как можно добраться до места начала тура наиболее удобным способом. Вы можете
                указать, из какого города лучше всего попасть в тур, на каком транспорте туда можно добраться, или когда
                и как лучше покупать билеты. Или можете оставить поле пустым</p>
            <DescReactQuill control={control} setValue={setValue} name={'recommendations'}/>
        </Layout>
    );
};

export default Recommendations;