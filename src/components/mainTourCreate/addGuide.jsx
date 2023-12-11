import React from 'react';
import Layout from "../layout/layout";
import styles from "./mainTourCreate.module.css";
import CustomAddButton from "../UI/customAddButton";

const AddGuide = () => {

    return (
        <Layout title="Гиды">
            <p className={styles.guideP}>Добавьте гидов, которые будут вести этот тур</p>
            <CustomAddButton label="Добавить гида"/>
            <span>Создайте нового гида или добавьте из созданных</span>
        </Layout>
    );
};

export default AddGuide;