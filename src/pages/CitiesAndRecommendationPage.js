import React from 'react';
import {Box} from "@mui/material";
import Recommendations from "../components/citiesAndRecommendation/recommendations";
import CollectionPoint from "../components/citiesAndRecommendation/collectionPoint";

const CitiesAndRecommendationPage = ({control, setValue}) => {
    return (
        <Box>
            <Recommendations control={control} setValue={setValue}/>
            <CollectionPoint control={control} setValue={setValue}/>
        </Box>
    );
};

export default CitiesAndRecommendationPage;