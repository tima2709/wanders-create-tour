import React from 'react';
import {useFieldArray} from "react-hook-form";



const Nested = ({control, register, nestIndex}) => {

    const { fields: residenceFields, append: appendResidence, remove: removeResidence } = useFieldArray({
        control,
        name: `place.${nestIndex}.place_residence`, // Используйте правильный путь к массиву вариантов проживания
    });

    return (
        <div>
            {residenceFields.map((residence, residenceIndex) => (
                <div key={residence.id}>
                    <input {...register(`place[${nestIndex}].place_residence[${residenceIndex}].title`)} defaultValue={residence.title} />
                    <input {...register(`place[${nestIndex}].place_residence[${residenceIndex}].description`)} defaultValue={residence.description} />
                    <input {...register(`place[${nestIndex}].place_residence[${residenceIndex}].amount_days`)} defaultValue={residence.amount_days} />
                    <input {...register(`place[${nestIndex}].place_residence[${residenceIndex}].type_accommodation`)} defaultValue={residence.type_accommodation} />

                    {/* Кнопка для удаления варианта проживания */}
                    <button type="button" onClick={() => removeResidence(residenceIndex)}>
                        Remove Residence
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() => {
                    appendResidence( { title: '', description: '', amount_days: 0, type_accommodation: '' });
                }}
            >
                Add Residence
            </button>
        </div>
    );
};

export default Nested;