import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Nested from "./nested";

const MyForm = () => {
    const { register, control, handleSubmit } = useForm();

    const { fields: places, append: appendPlace, remove: removePlace } = useFieldArray({
        control,
        name: 'place',
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {places.map((place, placeIndex) => (
                <div key={place.id} style={{marginTop: '20px'}}>
                    <input {...register(`place[${placeIndex}].amount_days`)} defaultValue={place.amount_days} />

                    {/* Поля для вариантов проживания внутри каждого места */}
                    <Nested control={control} register={register} nestIndex={placeIndex}/>

                    {/* Кнопка для добавления варианта проживания для текущего места */}


                    {/* Кнопка для удаления места проживания */}
                    <button type="button" onClick={() => removePlace(placeIndex)}>
                        Remove Place
                    </button>
                </div>
            ))}

            {/* Кнопка для добавления места проживания */}
            <button
                type="button"
                onClick={() => {
                    appendPlace({ amount_days: 0, place_residence: [] });
                }}
            >
                Add Place
            </button>

            <input type="submit" />
        </form>
    );
};

export default MyForm;
