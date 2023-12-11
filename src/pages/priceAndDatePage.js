import React from 'react';
import {Box} from "@mui/material";
import TourCurrency from "../components/priceAndDate/tourCurrency";
import GroupDates from "../components/priceAndDate/groupDates";

const PriceAndDatePage = ({control, setValue}) => {
    return (
        <Box>
            <TourCurrency control={control} setValue={setValue}/>
            <GroupDates control={control}/>
        </Box>
    );
};

export default PriceAndDatePage;