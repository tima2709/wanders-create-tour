import React from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import MultiSelectDropdown from "../UI/multiSelectDropdown";
import styles from './mainTourCreate.module.css';

const TourGeography = ({control, setValue}) => {


    // const [countries, setCountries] = useState([]);
    // const [region, setRegion] = useState([]);
    // const [location, setLocation] = useState([]);

    const countriesMap = [
        'Кыргызстан',
        'Казахстан',
        'Узбекистан',
    ]

    const regionMap = [
        'Бишкек',
        'Ош',
        'Иссык-Кульская обл.',
        'Чуйская обл.',
        'Нарынская обл.',
    ]

    const locationMap = [
        'Ущелье Ала-Арча',
        'Ущелье Аламедин',
        'Озеро Коль Тор',
        'Березовая роща',
        'Башня Бурана',
        'Панорама Ак-Таш',
    ]

    return (
        <Layout title={'Георафия тура'}>
            <Box sx={boxStyles}>
                <Box sx={col6}>
                    <Box sx={boxLeft}>
                        <MultiSelectDropdown
                            options={countriesMap}
                            label="Страны"
                            // selection={countries}
                            // setSelection={setCountries}
                            setValue={setValue}
                            control={control}
                            name={'countriesMap'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxLeft}>
                        <MultiSelectDropdown
                            options={regionMap}
                            label="Туристические регионы"
                            // selection={region}
                            // setSelection={setRegion}
                            setValue={setValue}
                            control={control}
                            name={'regionMap'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxLeft}>
                        <MultiSelectDropdown
                            options={locationMap}
                            label="Локации"
                            // selection={location}
                            // setSelection={setLocation}
                            setValue={setValue}
                            control={control}
                            name={'locationMap'}
                        />
                    </Box>
                </Box>
                <Box sx={col6}>
                    <Box sx={boxLeft}>
                        <MultiSelectDropdown
                            options={countriesMap}
                            label="Основная локация тура"
                            // selection={countries}
                            // setSelection={setCountries}
                            setValue={setValue}
                            control={control}
                            name={'locationMap'}
                        />
                        <p className={styles.location_info}>
                            Основная локация выводится в карточке тура в поиске. <br/>
                            Тур приоритетно попадает в каталог по своей основной локации
                        </p>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default TourGeography;

const boxStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // gap: '20px',
}

const col6 = {
    width: '50%',
}

const boxLeft = {
    padding: '10px',
    // marginLeft: '10px'
}

// const boxRight = {
//     padding: '10px',
//     // marginRight: '10px'
// }