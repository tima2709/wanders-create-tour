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
import {useDispatch} from "react-redux";
import {createTour} from "./redux/action/tourCreateAction";
import MyForm from "./components/chernovik";


function App() {

    const dispatch = useDispatch();

    const [pageNumber, setPageNumber] = useState(1)

    const handleClickPlus = () => {
        setPageNumber(pageNumber + 1)
        window.scrollTo(0, 0)
    }
    const handleClickMinus = () => {
        setPageNumber(pageNumber - 1)
        window.scrollTo(0, 0)
    }

    const {
        handleSubmit,
        control,
        setValue,
        register,
        defaultValues,
    } = useForm({
        defaultValues: {
            cancelReservation: '',
            place: [
                {
                    qtyNight: 1,
                    place_residence: [{
                        title: '',
                        description: '',
                        file: [],
                        type: '',
                    }]
                }
            ],
            program: [{title: '', description: '', ImgFile: null,}],
            accommodations: [{description: '', accommodationImages: ''}],
            included: [{title: ''}],
            notIncluded: [{title: ''}],
            concrete_tour: [
                {
                    price_KGZ: null,
                    price_RUB: null,
                    price_USD: null,
                    prepayment_period: null,
                    prepayment_amount: null,
                    concrete_tour_date: [
                        {
                            start_date: '',
                            end_date: '',
                            amount_seat: null,
                        }
                    ]
                }]
        }
    })

    const onSubmit = (data) => {
        dispatch(createTour(data))
    }


    return (
        <>
            {/*<MyForm/>*/}
            <form onSubmit={handleSubmit(onSubmit)} className="App">
                <Box>
                    <Button disabled={pageNumber === 1} variant={'contained'} onClick={handleClickMinus}
                            sx={{backgroundColor: 'green'}}>Назад</Button>
                    <Button disabled={pageNumber === 6} variant={'contained'} onClick={handleClickPlus}
                            sx={{backgroundColor: 'orange'}}>Дальше</Button>
                </Box>

                {
                    pageNumber === 1 &&
                    <MainCreateTourPage control={control} setValue={setValue} register={register}/>
                }
                {
                    pageNumber === 2 &&
                    <AccommodationPage defaultValues={defaultValues} control={control} setValue={setValue}
                                       register={register}/>
                }
                {
                    pageNumber === 3 &&
                    <PriceAndDatePage control={control} setValue={setValue} defaultValues={defaultValues}/>
                }
                {
                    pageNumber === 4 &&
                    <ProgramPage defaultValues={defaultValues} control={control} setValue={setValue}/>
                }
                {
                    pageNumber === 5 &&
                    <ConditionAndFaqPage defaultValues={defaultValues} control={control} setValue={setValue}/>
                }
                {
                    pageNumber === 6 &&
                    <CitiesAndRecommendationPage control={control} setValue={setValue}/>
                }

                <Box><span>{pageNumber}</span></Box>
                <Button disabled={pageNumber === 1} variant={'contained'} onClick={handleClickMinus}
                        sx={{backgroundColor: 'green'}}>Назад</Button>
                <Button

                    disabled={pageNumber === 6}
                    variant={'contained'}
                    onClick={handleClickPlus}
                    sx={{backgroundColor: 'orange'}}
                >
                    Дальше
                </Button>
                <Button type={'submit'}>Submit</Button>
            </form>
        </>

    );
}

export default App;
