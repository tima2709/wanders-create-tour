import React from 'react';
import Layout from "../layout/layout";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import {Box, Typography} from "@mui/material";
import {titleStyle} from "../UI/helper";
import InputFileBtn from "../UI/InputFileBtn";
import styles from "../mainTourCreate/mainTourCreate.module.css";
import CustomInput from "../UI/customInput";
import CustomBlackUploadBtn from "../UI/customBlackUploadBtn";

const GeneralDescOfAccommodation = ({control, setValue}) => {



    return (
        <Layout title="Общее описание проживания">
            <Box>
                <p>Туристам важно знать, где они будут располагаться. Укажите, какие есть варианты размещения и какие
                    условия их ждут. Желательно дополнить информацию фотографиями</p>
                <DescReactQuill control={control} setValue={setValue} name={'accommodations.0.description'}/>
            </Box>
            <Box>
                <Box sx={{marginBottom: '15px'}}>
                    <Typography variant={"h4"} sx={titleStyle}>Фотографии к описанию</Typography>
                    <p>Не используйте чужие фотографии без разрешения, за это можно получить крупный штраф!</p>
                    <InputFileBtn control={control} setValue={setValue} name={'accommodations.0.accommodationImages'}/>
                </Box>
                <Box sx={{display: 'flex', gap: '15px', marginBottom: '30px'}}>
                    {/*<CustomInput label={"Или вставьте ссылку на фото"} />*/}
                    <CustomBlackUploadBtn/>
                </Box>
            </Box>
        </Layout>
    );
};

export default GeneralDescOfAccommodation;