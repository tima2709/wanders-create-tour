import React from 'react';
import Layout from "../layout/layout";
import createTour from './styles.module.css'
import CustomInput from "../UI/customInput";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import InputFileBtn from "../UI/InputFileBtn";
import CustomAddButton from "../UI/customAddButton";
import {useFieldArray} from "react-hook-form";
import {Button} from "@mui/material";

const ProgramDays = ({control, setValue}) => {
    // const [tourDays, setTourDays] = useState([{...days}])

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'program'
    })


    // function addFieldDays() {
    //     const added = [...tourDays]
    //     const dynamicInput = {...days}
    //     added.push(dynamicInput)
    //     setTourDays(added)
    // }
    //
    // function handleChangeDayTitle(event, index) {
    //     const valueNew = [...tourDays]
    //     valueNew[index].daysTitle = event
    //     setTourDays(valueNew)
    // }
    //
    // function handleChangeDayDesc(event, index) {
    //     const valueNew = [...tourDays]
    //     valueNew[index].daysDescription = event
    //     setTourDays(valueNew)
    // }
    //
    // function handleChangeDayImages(event, index) {
    //     const valueNew = [...tourDays]
    //     const files = Array.from(event)
    //     const imgArray = files.map((file) => URL.createObjectURL(file))
    //
    //     valueNew[index].daysImages = event
    //     valueNew[index].selectedImg = imgArray
    //
    //     setTourDays(valueNew)
    //     // setSelectedImg(selectedImg.concat(imgArray))
    //
    // }
    //
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     const data = JSON.stringify(tourDays)
    //     console.log(data, 'data')
    //     localStorage.setItem('tourDays', data)
    // }

    return (
        <Layout>
            <div>
                <ol>
                    {
                        fields.map((item, index) => (
                            <div key={index}>
                                <div className={createTour.title_day}>
                                    <li><h1>День</h1></li>
                                    <CustomInput
                                        type={"text"}
                                        name={`program.${index}.title`}
                                        label={'Заголовок дня'}
                                        control={control}
                                    />
                                </div>
                                <div className={createTour.desc_day}>
                                    <h3>Описание</h3>
                                    <DescReactQuill
                                        name={`program.${index}.description`}
                                        placeholder={'description days'}
                                        control={control}
                                        setValue={setValue}
                                    />
                                </div>
                                <div className={createTour.add_image}>
                                    <h3>Добавить фотографии</h3>
                                    <InputFileBtn
                                        control={control}
                                        setValue={setValue}
                                        name={`program.${index}.ImgFile`}
                                    />
                                </div>
                                <Button type="button" onClick={() => remove(index)}>
                                    Удалить
                                </Button>
                                {/*<SelectedPreviewImg tourDays={tourDays} selectedImg={tourDays[index].selectedImg} setSelectedImg={setTourDays}/>*/}
                            </div>

                        ))
                    }
                </ol>
            </div>
            <div className={'btn_add_day'}>
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

export const days = {
    daysTitle: '',
    daysDescription: '',
    daysImages: [],
    selectedImg: [],
};