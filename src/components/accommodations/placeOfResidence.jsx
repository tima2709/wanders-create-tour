import React from 'react';
import Layout from "../layout/layout";
import styles from './styles.module.css';
import CustomInput from "../UI/customInput";
import InputFileBtn from "../UI/InputFileBtn";
import CustomAddButton from "../UI/customAddButton";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import CustomSelect from "../UI/customSelect";
import { useFieldArray} from "react-hook-form";
import {Button} from "@mui/material";
import QtyNightsSelector from "../UI/qtyNights/qtyNights";

const PlaceOfResidence = ({control, setValue}) => {

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'place'
    })


    const accommodationComfort = [
        {value: 'Tent', label: 'Tent'},
        {value: 'Hotel', label: 'Hotel'},
        {value: 'Hostel', label: 'Hostel'},
        {value: 'Cottage', label: 'Cottage'},
    ];


    // const handlePlusQtyNights = (index) => {
    //     const newQtyOfNights = [...tourHotels]
    //     newQtyOfNights[index].qtyNight = ++newQtyOfNights[index].qtyNight
    //     setTourHotels(newQtyOfNights)
    // }
    //
    // const handleMinusQtyNights = (index) => {
    //     const newQtyOfNights = [...tourHotels]
    //     newQtyOfNights[index].qtyNight = --newQtyOfNights[index].qtyNight
    //     setTourHotels(newQtyOfNights)
    // }

    return (
        <Layout>
            <div>
                <ol>
                    {
                        fields.map((field, index) => (
                            <div key={index}>
                                <li><h1>Место проживания</h1></li>
                                <QtyNightsSelector
                                    control={control}
                                    index={index}
                                    place={fields}
                                    setValue={setValue}
                                />
                                <h3>Варианты проживания на выбор в этот период тура</h3>
                                <div className={styles.select_variants}>
                                    <CustomSelect
                                        options={accommodationComfort}
                                        label={'Проживание'}
                                        control={control}
                                        name={`place.${index}.select`}
                                        setValue={setValue}
                                    />
                                </div>
                                <div className={styles.acc_title}>
                                    <CustomInput
                                        type="text"
                                        name={`place.${index}.title`}
                                        label={'Заголовок'}
                                        control={control}
                                    />
                                </div>
                                <div className={styles.acc_desc}>
                                    <DescReactQuill
                                        name={`place.${index}.description`}
                                        control={control}
                                        setValue={setValue}
                                    />
                                </div>
                                <div className={styles.upload_pic}>
                                    <h3>Добавить фотографии</h3>
                                    <InputFileBtn
                                    name={`place.${index}.file`}
                                    control={control}
                                    setValue={setValue}
                                    />
                                </div>
                                <Button type="button" onClick={() => remove(index)}>
                                    Удалить
                                </Button>
                            </div>
                        ))
                    }
                </ol>
                <CustomAddButton
                    onClick={() => append({title: '', description: '', file: null, select: '', qtyNight: 1})}
                    label={'Добавить проживание'}
                />

            </div>
        </Layout>
    );
};

export default PlaceOfResidence;

// export const hotels = {
//     hotelTitle: '',
//     hotelDescription: '',
//     hotelImages: [],
//     selectedImg: [],
//     qtyNight: 1,
//     type: '',
// };