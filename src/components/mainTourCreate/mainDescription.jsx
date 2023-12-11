import React from 'react';
import Layout from "../layout/layout";
import styles from './mainTourCreate.module.css';
import DescReactQuill from "../UI/descReactQuill/descReactQuill";

const MainDescription = ({control, setValue}) => {

    return (
        <Layout title="Общее описание">
            <p className={styles.layoutDesc} style={{marginBottom: '35px'}}>Опишите, в чем уникальность и польза вашего тура по сравнению с другими.
                Рекомендуемый объем: не больше 2-3 абзацев по 2-3 предложения (1000 символов)</p>
            <DescReactQuill name={'mainDescription'} control={control} setValue={setValue}/>
        </Layout>
    );
};

export default MainDescription;