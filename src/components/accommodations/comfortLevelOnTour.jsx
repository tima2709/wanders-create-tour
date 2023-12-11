import React from 'react';
import Layout from "../layout/layout";
import RadioInput from "../UI/radioInput";

const ComfortLevelOnTour = ({control, setValue, register}) => {

    return (
        <Layout title="Уровень комфорта в туре">
            <p>Вы можете выбрать несколько вариантов, если тур предполагает выбор уровня комфорта по желанию
                клиента </p>
            <RadioInput
                level={"Base"}
                name={"comfortLevel"}
                control={control}
                setValue={setValue}
                register={register}
                label={"Базовый"}
                housing={"Палатки, кемпинги, хижины"}
            />
            <RadioInput
                level={"Simple"}
                name={"comfortLevel"}
                control={control}
                setValue={setValue}
                register={register}
                label={"Простой"}
                housing={"Гостевые дома, гостиницы 1*, дома на колесах"}
            />
            <RadioInput
                level={"Medium"}
                name={"comfortLevel"}
                control={control}
                setValue={setValue}
                register={register}
                label={"Средний"}
                housing={"Гостиницы 2**, апартаменты, коттеджи"}
            />
            <RadioInput
                level={"Above_average"}
                name={"comfortLevel"}
                control={control}
                setValue={setValue}
                register={register}
                label={"Выше среднего"}
                housing={"Гостиницы 3***, виллы"}
            />
            <RadioInput
                level={"High"}
                name={"comfortLevel"}
                control={control}
                setValue={setValue}
                register={register}
                label={"Высокий"}
                housing={"Гостиницы 4-5***, глэмпинги, бутик-отели"}
            />
        </Layout>
    );
};

export default ComfortLevelOnTour;