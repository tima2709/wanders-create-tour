import React, {useState} from 'react';
import Layout from "../layout/layout";
import styles from "./mainTourCreate.module.css";
import CustomAddButton from "../UI/customAddButton";
import {Box, Button} from "@mui/material";
import CustomSelect from "../UI/customSelect";
import InputFileBtn from "../UI/InputFileBtn";
import CustomInput from "../UI/customInput";
import MyModal from "../UI/MyModal/Modal";

const AddGuide = ({control, setValue}) => {

    const guids = [
        {
            value: 'shuher',
            label: 'Шухер'
        },
        {
            value: 'molniya',
            label: 'Молния'
        },
    ]

    const [selectGuide, setSelectGuide] = useState('selectFromList');
    const [visible, setVisible] = useState(false)

    return (
        <Layout title="Гиды">
            <p className={styles.guideP}>Добавьте гидов, которые будут вести этот тур</p>
            <CustomAddButton label="Добавить гида" type={'button'} onClick={() => setVisible(true)}/>
            <span>Создайте нового гида или добавьте из созданных</span>

                <MyModal setVisible={setVisible} visible={visible}>
                    <Box>
                        <h1>Добавить гида к туру</h1>
                        <p>Добавьте гидов, которые будут вести этот тур</p>
                        <Button onClick={() => setSelectGuide('selectFromList')}>Выбрать из списка</Button>
                        <Button onClick={() => setSelectGuide('createNewGuide')}>Создать нового</Button>
                        {
                            selectGuide === 'createNewGuide'
                                ?
                                <Box>
                                    <p>Загрузите фото гида и добавьте описание</p>
                                    <InputFileBtn name={'newGuide'} setValue={setValue} control={control}/>
                                    <CustomInput type={'text'} name={'guideName'} control={control} label={'Имя'}/>
                                    <CustomInput type={'text'} name={'guideSurname'} control={control} label={'Фамилия'}/>
                                    <CustomInput type={'text'} name={'guideDesc'} control={control} label={'Расскажите о гиде'}/>
                                </Box>
                                :
                                <Box>
                                    <CustomSelect
                                        options={guids}
                                        setValue={setValue}
                                        name={'guide'}
                                        label={'Выберите гидов'}
                                        control={control}
                                    />
                                </Box>

                        }
                    </Box>
                </MyModal>

        </Layout>
    );
};

export default AddGuide;