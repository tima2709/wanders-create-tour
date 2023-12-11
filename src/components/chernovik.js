import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const YourFormComponent = () => {
    const { register, handleSubmit, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dynamicInputs',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Основные статические поля */}
            <input {...register('staticInput1')} />
            <input {...register('staticInput2')} />
            {/* Динамические поля */}
            {fields.map((field, index) => (
                <div key={field.id}>
                    <input {...register(`dynamicInputs.${index}.name`)} defaultValue={field.name} />
                    <input {...register(`dynamicInputs.${index}.value`)} defaultValue={field.value} />
                    <button type="button" onClick={() => remove(index)}>
                        Удалить
                    </button>
                </div>
            ))}
            <button type="button" onClick={() => append({ name: '', value: '' })}>
                Добавить поле
            </button>
            <button type="submit">Отправить форму</button>
        </form>
    );
};

export default YourFormComponent;
