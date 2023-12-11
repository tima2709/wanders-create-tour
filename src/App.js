import './App.css';
import MainCreateTourPage from "./pages/mainCreateTourPage";
import AccommodationPage from "./pages/accommodationPage";
import PriceAndDatePage from "./pages/priceAndDatePage";
import ProgramPage from "./pages/ProgramPage";
import ConditionAndFaqPage from "./pages/ConditionAndFAQPage";
import CitiesAndRecommendationPage from "./pages/CitiesAndRecommendationPage";
import {useState} from "react";
import {Box, Button} from "@mui/material";
import {useForm} from "react-hook-form";
import YourFormComponent from "./components/chernovik";
import PlaceOfResidence from "./components/accommodations/placeOfResidence";

function App() {

    const [pageNumber, setPageNumber] = useState(1)

    const handleClickPlus = () => setPageNumber(pageNumber + 1)
    const handleClickMinus = () => setPageNumber(pageNumber - 1)

    const {
        handleSubmit,
        control,
        setValue,
        register,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="App">
                <Box>
                    <Button disabled={pageNumber === 1} variant={'contained'} onClick={handleClickMinus} sx={{backgroundColor: 'green'}}>Назад</Button>
                    <Button disabled={pageNumber === 6} variant={'contained'} onClick={handleClickPlus} sx={{backgroundColor: 'orange'}}>Дальше</Button>
                </Box>

                {pageNumber === 1 && <MainCreateTourPage control={control} setValue={setValue} register={register}/>}
                {pageNumber === 2 && <AccommodationPage control={control} setValue={setValue} register={register}/>}
                {pageNumber === 3 && <PriceAndDatePage  control={control} setValue={setValue}/>}
                {pageNumber === 4 && <ProgramPage  control={control} setValue={setValue}/>}
                {pageNumber === 5 && <ConditionAndFaqPage  control={control} setValue={setValue}/>}
                {pageNumber === 6 && <CitiesAndRecommendationPage  control={control} setValue={setValue}/>}

                <Box><span>{pageNumber}</span></Box>
                <Button disabled={pageNumber === 1} variant={'contained'} onClick={handleClickMinus} sx={{backgroundColor: 'green'}}>Назад</Button>
                <Button disabled={pageNumber === 6} variant={'contained'} onClick={handleClickPlus} sx={{backgroundColor: 'orange'}}>Дальше</Button>
            <Button type={'submit'}>Submit</Button>
            </form>
        </>

    );
}

export default App;
