import React from 'react';
import styles from './uiStyles.module.css'
import {Controller} from "react-hook-form";

const RadioInput = ({level, name, label, housing, control, setValue, register}) => {

    // const handleRadio = (e) => {
    //     console.log(level, 'val')
    //     console.log(e.target, 'e')
    //     setValue(name, e.target.value)
    // }
    //
    // console.log(name, 'name')

    return (
        <>
            <label className={styles.label_radio} >
                <div>
                    <Controller
                        name={name}
                        control={control}
                        render={({field}) =>{
                            return (
                                <input
                                    type="radio"
                                    value={level}
                                    {...register(name)}
                                    id={level}
                                    name={name}
                                    checked={field.value === level}
                                    onChange={(e) => {
                                        // field.onChange(e.target.value);
                                        console.log(field, 'field')
                                        console.log(e, 'e')
                                        setValue(name, e.target.value)
                                    }}
                                    {...field}
                                />
                            )
                        }
                        }/>
                </div>
                <div className={styles.comfort_desc}>
                    <h4>{label}</h4>
                    <span>{housing}</span>
                </div>
            </label>
        </>
    );
};

export default RadioInput;