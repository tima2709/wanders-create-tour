import React from 'react';
import styles from './uiStyles.module.css'


const RadioInput = ({level, name, label, housing, setValue, register}) => {

    return (
        <>
            <label className={styles.label_radio}>
                <div>
                    <input
                        type="radio"
                        value={level}
                        {...register(name)}
                        id={level}
                        name={name}
                        onChange={(e) => {
                            setValue(name, e.target.value)
                        }}
                    />
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