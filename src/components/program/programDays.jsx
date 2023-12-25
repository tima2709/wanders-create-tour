import React from 'react';
import Layout from "../layout/layout";
import styles from './styles.module.css'
import CustomInput from "../UI/customInput";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import InputFileBtn from "../UI/InputFileBtn";
import CustomAddButton from "../UI/customAddButton";
import {useFieldArray} from "react-hook-form";
import {Button} from "@mui/material";

const ProgramDays = ({control, setValue, defaultValues}) => {


    const {fields, append, remove} = useFieldArray({
        control,
        name: 'program',
        defaultValues
    })

    return (
        <Layout>
            <div>
                <ol className={styles.tag_ol}>
                    {
                        fields.map((item, index) => (
                            <div key={item.id}>
                                <div className={styles.title_day}>
                                    <li className={styles.tag_li}><h1>День</h1></li>
                                    <CustomInput
                                        type={"text"}
                                        name={`program.${index}.title`}
                                        label={'Заголовок дня'}
                                        control={control}
                                    />
                                </div>
                                <div className={styles.desc_day}>
                                    <h3>Описание</h3>
                                    <DescReactQuill
                                        name={`program.${index}.description`}
                                        placeholder={'description days'}
                                        control={control}
                                        setValue={setValue}
                                    />
                                </div>
                                <div className={styles.add_image}>
                                    <h3>Добавить фотографии</h3>
                                    <InputFileBtn
                                        control={control}
                                        setValue={setValue}
                                        name={`program.${index}.ImgFile`}
                                    />
                                </div>

                                {/*<SelectedPreviewImg tourDays={tourDays} selectedImg={tourDays[index].selectedImg} setSelectedImg={setTourDays}/>*/}
                            </div>

                        ))
                    }
                </ol>
            </div>
            <div className={styles.btn_add_day}>
                <CustomAddButton
                    type={'button'}
                    onClick={() => append({title: '', description: '', ImgFile: null, })}
                    label={'Добавить день'}
                />
            </div>

        </Layout>
    );
};

export default ProgramDays;
