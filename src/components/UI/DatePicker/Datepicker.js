import React from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import './datepicker.css';
import {Controller} from "react-hook-form";

const Datepicker = ({startDay, endDay, control, name, label, setValue}) => {

    // const [dateRange, setDateRange] = useState([]);

    const options = {
        // locale: {
        //     ...Russian,
        //     months: {
        //         ...Russian.months,
        //         shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Ноя", "Дек",],
        //         longhand: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
        //     }
        // },
        monthSelectorType: 'static',
        minDate: new Date(),
        altInput: true,
        dateFormat: "YYYY-MM-DD",
        altFormat: "DD-MM-YYYY",
        enableTime: false,
    };


    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Flatpickr
                        placeholder={label}
                        className={'datePicker'}
                        options={options}
                        data-text-field
                        data-enable-time
                        onChange={(date) => {
                            setValue(date);
                        }}
                        {...field}
                    />
                )
                }/>
        </>
    );
};

export default Datepicker;