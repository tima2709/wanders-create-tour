import React from 'react';
import UploadFromIcon from "../icons/uploadFromIcon";
import styles from './uiStyles.module.css';


const InputFileBtn = ({ name, setValue}) => {

      return (
        <label className={styles.inputFile_label}>
            <div className={styles.inputFile_svg_span}>
                <UploadFromIcon/>
                <span className={styles.upload}>Загрузить фото с устройства</span>
            </div>
            <input
                className={styles.inputNone}
                name={name}
                accept={'image/*, .png, .jpg, .gif, .web,'}
                type='file'
                multiple={true}
                onChange={(e) => setValue(name, e.target.files)}
            />
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