import React from 'react';
import UploadFromIcon from "../icons/uploadFromIcon";
import styles from './uiStyles.module.css'
import {Controller} from "react-hook-form";


const InputFileBtn = ({control, name, setValue}) => {



    return (
        <label className={styles.inputFile_label}>
            <div className={styles.inputFile_svg_span}>
                <UploadFromIcon/>
                <span className={styles.upload}>Загрузить фото с устройства</span>
            </div>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                <input
                    className={styles.inputNone}
                    accept={'image/*, .png, .jpg, .gif, .web,'}
                    type='file'
                    multiple={true}
                    onChange={(e) => {
                        const file = e.target.files
                        field.onChange(file)
                        setValue(name, file)
                    }}
                    {...field}
                />
            )}/>
        </label>
    );
};

export default InputFileBtn;

// const customBtn = {
//     borderRadius: '10px',
//     boxShadow: 0,
//     backgroundColor: '#D4EFE1',
//     textTransform: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '10px',
//     padding: '13px 17px',
//     fontSize: '14px',
//     fontWight: '900',
//     color: '#0FA958',
//     '&:hover': {
//         backgroundColor: '#D4EFE1'
//     }
// }