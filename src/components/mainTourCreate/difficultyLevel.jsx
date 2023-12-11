import React, {useState} from 'react';
import Layout from "../layout/layout";
import RadioInput from "../UI/radioInput";

const DifficultyLevel = ({control, setValue, register}) => {

    // const [tourAdd, setTourAdd] = useState({
    //     accommodationTitle: '',
    //     accommodationDescription: '',
    //     level: '',
    // })

    // const handleComfort = (e) => {
    //     setTourAdd({...tourAdd, level: e.target.value})
    // }

    return (
        <Layout title={'Уровень сложности'}>
            <RadioInput
                level={"Base"}
                name={"difficultyLevel"}
                control={control}
                setValue={setValue}
                register={register}
                // checked={tourAdd.level === "Base"}
                // onChange={(e) => handleComfort(e)}
                label={"Базовый"}
                housing={"Подходит для всех вне зависимости от физической подготовки и возраста"}
            />
            <RadioInput
                level={"Medium"}
                name={"difficultyLevel"}
                control={control}
                setValue={setValue}
                register={register}
                // checked={tourAdd.level === "Medium"}
                // onChange={(e) => handleComfort(e)}
                label={"Средний"}
                housing={"Предполагает умеренную физическую нагрузку, подходящую новичкам"}
            />
            <RadioInput
                level={"Advanced"}
                name={"difficultyLevel"}
                control={control}
                setValue={setValue}
                register={register}
                // checked={tourAdd.level === "Advanced"}
                // onChange={(e) => handleComfort(e)}
                label={"Продвинутый"}
                housing={"Необходим опыт походов, спецаильные навыки и отличная физическая форма"}
            />
        </Layout>
    );
};

export default DifficultyLevel;