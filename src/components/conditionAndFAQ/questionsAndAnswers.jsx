import React from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import CustomInput from "../UI/customInput";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";
import DeleteBtn from "../UI/deleteBtn";
import CustomAddButton from "../UI/customAddButton";
import {useFieldArray} from "react-hook-form";

const QuestionsAndAnswers = ({control, setValue}) => {

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'questions'
    })

    return (
        <Layout title="Вопросы и ответы по туру">
            <p>Все вопросы будут отражены в блоке “Важно знать” на странице тура на сайте</p>
            {
                fields.map((field, index) => (
                    <Box key={index}>
                        <Box>
                            <h5>Вопрос 1</h5>
                            <CustomInput
                                type="text"
                                control={control}
                                label={'Вопрос'}
                                name={`questions.${index}.question`}
                            />
                        </Box>
                        <Box>
                            <h5>Ответ</h5>
                            <DescReactQuill
                                control={control}
                                name={`questions.${index}.answer`}
                            />
                        </Box>
                        <DeleteBtn onClick={() => remove(index)}/>
                    </Box>
                ))
            }
            <CustomAddButton
                type={'button'}
                onClick={() => append({question: '', answer: '',})}
                label={'Добавить вопрос'}
            />
        </Layout>
    );
};

export default QuestionsAndAnswers;

