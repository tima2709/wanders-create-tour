import React from 'react';
import accommodationStyle from "../../accommodations/styles.module.css";
import MinusIcon from "../../icons/minusIcon";
import PlusIcon from "../../icons/plusIcon";
import {Controller} from "react-hook-form";

const QtyNightsSelector = ({control, index, place, handleMinusQtyNights, handlePlusQtyNights, setValue}) => {
    return (
        <>
            <Controller
                name={`place[${index}].qtyNight`}
                control={control}
                defaultValue={place[index]?.qtyNight}
                render={
                    ({field})=> (
                        <div className={accommodationStyle.qtyNights}>
                            <button
                                type="button"
                                // disabled={field?.value === 1}
                                onClick={() => {
                                    field.onChange(field?.qtyNight - 1)
                                    // handleMinusQtyNights(index)
                                }}
                            >
                                <MinusIcon/>
                            </button>
                            <span>{place[index]?.qtyNight}</span>
                            <button
                                type="button"
                                onClick={() =>{
                                    field.onChange(field.value + 1);
                                    // handlePlusQtyNights(index)
                                }}
                                >
                                <PlusIcon/>
                            </button>
                        </div>
                    )}


            />
        </>
    );
};

export default QtyNightsSelector;