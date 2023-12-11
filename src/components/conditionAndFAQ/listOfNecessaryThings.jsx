import React, {useState} from 'react';
import Layout from "../layout/layout";
import {Box} from "@mui/material";
import DescReactQuill from "../UI/descReactQuill/descReactQuill";

const ListOfNecessaryThings = ({control, setValue}) => {

    const [checked, setChecked] = useState(false)

    return (
        <Layout title="Список вещей">
            <Box sx={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                <input type="checkbox" value={checked} onChange={(e) => setChecked(e.target.checked)}/>
                <p>В этом туре нужен список вещей</p>
            </Box>

            {
                !!checked &&
                <Box>
                    <h5>В этом туре нужен список вещей</h5>
                    <DescReactQuill name={'necessaryThings'} control={control} setValue={setValue}/>
                </Box>
            }
            
        </Layout>
    );
};

export default ListOfNecessaryThings;