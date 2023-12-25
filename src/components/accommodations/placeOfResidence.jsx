import React from 'react';
import Layout from "../layout/layout";
import styles from './styles.module.css';
import CustomInput from "../UI/customInput";
import InputFileBtn from "../UI/InputFileBtn";
import CustomAddButton from "../UI/customAddButton";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import CustomSelect from "../UI/customSelect";
import { useFieldArray} from "react-hook-form";
import {Box, Button} from "@mui/material";
import QtyNightsSelector from "../UI/qtyNights/qtyNights";
import VariantPlace from "./variantPlace";

const PlaceOfResidence = ({control, setValue, defaultValues}) => {

    const {fields: placeFields, append: placeAppend, remove: placeRemove} = useFieldArray({
        control,
        name: 'place',
        defaultValues,
    })


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
                <ol className={styles.tag_ol}>
                    {
                        placeFields.map((field, placeIndex) => (
                            <div key={field.id}>
                                <li className={styles.tag_li}><h1>Место проживания</h1></li>
                                <QtyNightsSelector
                                    control={control}
                                    index={placeIndex}
                                    place={placeFields}
                                    setValue={setValue}
                                />
                                <h3>Варианты проживания на выбор в этот период тура</h3>

                                <VariantPlace
                                    setValue={setValue}
                                    control={control}
                                    defaultValues={defaultValues}
                                    placeIndex={placeIndex}
                                />

                                <Button type="button" onClick={() => placeRemove(placeIndex)}>
                                    Удалить
                                </Button>
                            </div>
                        ))
                    }
                </ol>
                <CustomAddButton
                    onClick={() => placeAppend({qtyNight: 1, place_residence: []})}
                    label={'Добавить проживание'}
                />

            </div>
        </Layout>
    );
};

export default PlaceOfResidence;

