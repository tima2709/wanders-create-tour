import React from 'react';
import {Box} from "@mui/material";
import ComfortLevelOnTour from "../components/accommodations/comfortLevelOnTour";
import GeneralDescOfAccommodation from "../components/accommodations/generalDescOfAccommodation";
import PlaceOfResidence from "../components/accommodations/placeOfResidence";

const AccommodationPage = ({control, setValue, register, defaultValues}) => {
    return (
        <Box>
            <ComfortLevelOnTour setValue={setValue} register={register}/>
            <GeneralDescOfAccommodation control={control} setValue={setValue}/>
            <PlaceOfResidence control={control} setValue={setValue} defaultValues={defaultValues}/>
        </Box>
    );
};

export default AccommodationPage;