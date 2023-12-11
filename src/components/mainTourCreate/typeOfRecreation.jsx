import React from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import MultiSelectDropdown from "../UI/multiSelectDropdown";



const TypeOfRecreation = ({control, setValue}) => {


    const categories = [
        'Туры на 1 день',
        'Туры на 2 дня',
        'Туры на 3 дня',
        'Этнотуры',
        'Туры в горы',
        'Фототуры',
        'Обзорные туры',
        'Семейные туры',
        'Отдых с детьми',
        'Шопинг туры',
    ];

    const activities = [
        'Конные туры',
        'Восхождения',
        'Пешие туры',
        'Горнолыжные туры',
        'Фитнес и йога туры',
        'Джип-туры',
        'Кемпинг туры',
        'Велотуры',
        'Девичники',
        'Мальчишники',
    ];

    // const [categoriesTour, setCategoriesTour] = useState([]);
    // const [activitiesTour, setActivitiesTour] = useState([]);


    return (
        <Layout title="Виды отдыха">
            <Box sx={{display: 'flex', gap: '20px'}}>
                <MultiSelectDropdown
                    options={categories}
                    label="Подборки"
                    // selection={categoriesTour}
                    // setSelection={setCategoriesTour}
                    name={'categories'}
                    control={control}
                    setValue={setValue}
                />
                <MultiSelectDropdown
                    options={activities}
                    label="Активности в туре"
                    // selection={activitiesTour}
                    // setSelection={setActivitiesTour}
                    name={'activities'}
                    control={control}
                    setValue={setValue}
                />
            </Box>
        </Layout>
    );
};

export default TypeOfRecreation;