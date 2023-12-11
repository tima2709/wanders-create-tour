import React from 'react';
import {Box} from "@mui/material";
import PriceTour from "../components/conditionAndFAQ/priceTour";
import CanselReservation from "../components/conditionAndFAQ/canselReservation";
import ListOfNecessaryThings from "../components/conditionAndFAQ/listOfNecessaryThings";
import QuestionsAndAnswers from "../components/conditionAndFAQ/questionsAndAnswers";

const ConditionAndFaqPage = ({control, setValue}) => {
    return (
        <Box>
            <PriceTour control={control} setValue={setValue}/>
            <CanselReservation control={control} setValue={setValue}/>
            <ListOfNecessaryThings control={control} setValue={setValue}/>
            <QuestionsAndAnswers control={control} setValue={setValue}/>
        </Box>
    );
};

export default ConditionAndFaqPage;