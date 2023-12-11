import React from 'react';
import TypeOfTour from "../components/mainTourCreate/typeOfTour";
import MainDescription from "../components/mainTourCreate/mainDescription";
import TypeOfRecreation from "../components/mainTourCreate/typeOfRecreation";
import DifficultyLevel from "../components/mainTourCreate/difficultyLevel";
import TourGeography from "../components/mainTourCreate/tourGeography";
import AboutTour from "../components/mainTourCreate/aboutTour";
import UploadCardPhoto from "../components/mainTourCreate/uploadCardPhoto";
import AddGuide from "../components/mainTourCreate/addGuide";
import {Box} from "@mui/material";

const MainCreateTourPage = ({control, setValue, register}) => {
    return (
        <Box>
            <TypeOfTour control={control} setValue={setValue}/>
            <MainDescription control={control} setValue={setValue}/>
            <TypeOfRecreation control={control} setValue={setValue}/>
            <DifficultyLevel setValue={setValue} register={register}/>
            <TourGeography control={control} setValue={setValue}/>
            {/*<MainImpressions/>*/}
            <AboutTour control={control} setValue={setValue}/>
            <UploadCardPhoto control={control} setValue={setValue}/>
            <AddGuide control={control} setValue={setValue}/>
        </Box>
    );
};

export default MainCreateTourPage;