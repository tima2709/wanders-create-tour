import React, {useState} from 'react';
import Layout from "../layout/layout";
import {Box, Typography} from "@mui/material";
import CustomInput from "../UI/customInput";
import InputFileBtn from "../UI/InputFileBtn";
import CustomBlackUploadBtn from "../UI/customBlackUploadBtn";
import DeleteBtn from "../UI/deleteBtn";
import CustomAddButton from "../UI/customAddButton";
import styles from './mainTourCreate.module.css';

const MainImpressions = () => {

    const [tourImpressions, setTourImpressions] = useState([impressions])

    function addFieldImpression() {
        const added = [...tourImpressions]
        const dynamicInput = {...impressions}
        added.push(dynamicInput)
        setTourImpressions(added)
    }

    function handleChangeTitle(event, index) {
        const newValue = [...tourImpressions]
        newValue[index].title = event
        setTourImpressions(newValue)
    }

    function handleChangeDesc(event, index) {
        const newValue = [...tourImpressions]
        newValue[index].description = event
        setTourImpressions(newValue)
    }

    function handleChangeImage(event, index) {
        const newValue = [...tourImpressions]
        newValue[index].images = event
        setTourImpressions(newValue)
    }


    return (
        <Layout title={"Главные впечатления"}>
            <p className={styles.layoutDesc} style={{marginBottom: '35px'}}>Кратко опишите, какие уникальные впечатления ждут туристов, чем тур
                отличается от других</p>
            <ol>
                {
                    tourImpressions.map((el, index) => (
                        <li key={index}>
                            <Typography sx={h5Title} variant="h5" className={styles.layoutH5}>Впечатление</Typography>
                            <Box sx={{marginBottom: '10px'}}>
                                <CustomInput
                                    typeInput={"text"}
                                    label="Заголовок"
                                    value={el.title}
                                    onChange={(e) => handleChangeTitle(e.target.value, index)}
                                />
                            </Box>
                            <Box sx={{marginBottom: '25px'}}>
                                <CustomInput
                                    typeInput={"text"}
                                    label="Описание"
                                    value={el.description}
                                    onChange={(e) => handleChangeDesc(e.target.value, index)}
                                />
                            </Box>
                            <Box sx={{marginBottom: '15px'}}>
                                <Typography sx={h5Title} variant="h5" className={styles.layoutH5}>Загрузите фотографию
                                    впечатления</Typography>
                                <InputFileBtn onChange={(e) => handleChangeImage(e.target.files, index)}/>
                            </Box>
                            <Box sx={{display: 'flex', gap: '15px', marginBottom: '30px'}}>
                                <CustomInput label={"Или вставьте ссылку на фото"}/>
                                <CustomBlackUploadBtn/>
                            </Box>
                            <Box sx={{paddingBottom: '40px'}}>
                                <DeleteBtn/>
                            </Box>
                        </li>
                    ))
                }
            </ol>
            <Box>
                <Box className={styles.lastLine}></Box>
                <CustomAddButton label="Добавить впечатление" onClick={addFieldImpression}/>
            </Box>
        </Layout>
    );
};

export default MainImpressions;

export const impressions = {
    title: '',
    description: '',
    images: []
}

const h5Title = {
    marginBottom: '16px'
}