import React from 'react';
import Layout from "../layout/layout";
import styles from "./mainTourCreate.module.css";
import {Box, Typography} from "@mui/material";
import InputFileBtn from "../UI/InputFileBtn";
import CustomInput from "../UI/customInput";
import CustomBlackUploadBtn from "../UI/customBlackUploadBtn";

const UploadCardPhoto = ({control, setValue}) => {

    return (
        <Layout title="Загрузите фотографии">
            <Typography sx={{marginBottom: '16px'}} variant="h5" className={styles.layoutH5}>Фотография
                карточки</Typography>
            <p className={styles.layoutDesc} style={{marginBottom: '10px'}}>Фотография хорошего качества для
                карточки.</p>
            <p className={styles.layoutDesc} style={{marginBottom: '20px'}}>Не используйте чужие фотографии без
                разрешения, за это можно получить крупный штраф!</p>
            <Box sx={{marginBottom: '15px'}}>
                <InputFileBtn
                    name={'mainImages'}
                    control={control}
                    setValue={setValue}
                />
            </Box>
            <Box sx={{display: 'flex', gap: '15px', marginBottom: '30px'}}>
                <CustomInput
                    label={"Или вставьте ссылку на фото"}
                    control={control}
                    name={'UrlImage'}
                />
                <CustomBlackUploadBtn/>
            </Box>

        </Layout>
    );
};

export default UploadCardPhoto;