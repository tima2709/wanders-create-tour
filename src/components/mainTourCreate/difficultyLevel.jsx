import React from 'react';
import Layout from "../layout/layout";
import RadioInput from "../UI/radioInput";

const DifficultyLevel = ({ setValue, register}) => {

    return (
        <Layout title={'Уровень сложности'}>
            <RadioInput
                level={"Base"}
                name={"difficultyLevel"}
                setValue={setValue}
                register={register}
                label={"Базовый"}
                housing={"Подходит для всех вне зависимости от физической подготовки и возраста"}
            />
            <RadioInput
                level={"Medium"}
                name={"difficultyLevel"}
                setValue={setValue}
                register={register}
                label={"Средний"}
                housing={"Предполагает умеренную физическую нагрузку, подходящую новичкам"}
            />
            <RadioInput
                level={"Advanced"}
                name={"difficultyLevel"}
                setValue={setValue}
                register={register}
                label={"Продвинутый"}
                housing={"Необходим опыт походов, спецаильные навыки и отличная физическая форма"}
            />
        </Layout>
    );
};

export default DifficultyLevel;