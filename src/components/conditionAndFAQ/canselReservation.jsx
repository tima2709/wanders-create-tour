import React, {useState} from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import {Controller} from "react-hook-form";

const CanselReservation = ({control, setValue}) => {

    const [checked, setChecked] = useState(false)

  
    return (
        <Layout title="Отмена бронирования">
            <Box sx={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                <input type="checkbox" value={checked} onChange={(e) => setChecked(e.target.checked)}/>
                <Box>
                    <h5>Использовать стандартные условия отмены</h5>
                    <p>Для просмотра условий отмены перейдите в настройки организатора</p>
                </Box>
            </Box>
            {
                !!checked && 
                <Box>
                    <Controller
                        control={control}
                        render={({field}) => (
                        <input
                            type="file"
                            onChange={(e) => setValue(e.target.value)}
                            {...field}
                        />
                    )} name={'reservation'}/>
                </Box>
            }
        </Layout>
    );
};

export default CanselReservation;