import React from 'react';
import {useFieldArray} from "react-hook-form";
import {Box} from "@mui/material";
import styles from "./styles.module.css";
import CustomSelect from "../UI/customSelect";
import CustomInput from "../UI/customInput";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import InputFileBtn from "../UI/InputFileBtn";
import CustomAddButton from "../UI/customAddButton";

const VariantPlace = ({control, defaultValues, placeIndex, setValue}) => {

    const {fields: variantFields, append: variantAppend, remove: variantRemove} = useFieldArray({
        control,
        name: `place.${placeIndex}.place_residence`,
        defaultValues,
    })

    const accommodationComfort = [
        {value: 'Tent', label: 'Tent'},
        {value: 'Glamping', label: 'Глэмпинг'},
        {value: 'Hotel', label: 'Hotel'},
        {value: 'Hostel', label: 'Hostel'},
        {value: 'Holiday House', label: 'Дом отдыха'},
        {value: 'Apartments', label: 'Апартаменты'},
        {value: 'Camp site', label: 'Турбаза'},
        {value: 'Sanatorium', label: 'Санаторий'},
        {value: 'Villa', label: 'Вилла'},
    ];

    return (
        <>
            {
                variantFields.map((variantField, variantIdx) => (
                    <Box key={variantField.id}>
                        <div className={styles.select_variants}>
                            <CustomSelect
                                options={accommodationComfort}
                                label={'Проживание'}
                                control={control}
                                name={`place.${placeIndex}.place_residence.${variantIdx}.type`}
                                setValue={setValue}
                            />
                        </div>
                        <div className={styles.acc_title}>
                            <CustomInput
                                type="text"
                                name={`place.${placeIndex}.place_residence.${variantIdx}.title`}
                                label={'Заголовок'}
                                control={control}
                            />
                        </div>
                        <div className={styles.acc_desc}>
                            <DescReactQuill
                                name={`place.${placeIndex}.place_residence.${variantIdx}.description`}
                                control={control}
                                setValue={setValue}
                            />
                        </div>
                        <div className={styles.upload_pic}>
                            <h3>Добавить фотографии</h3>
                            <InputFileBtn
                                name={`place.${placeIndex}.place_residence.${variantIdx}.file`}
                                control={control}
                                setValue={setValue}
                            />
                        </div>
                    </Box>
                ))
            }
            <CustomAddButton
                onClick={() => variantAppend({title: '', description: '', file: [], type: ''})}
                label={'Добавить вариант проживание'}
            />
        </>
    );
};

export default VariantPlace;