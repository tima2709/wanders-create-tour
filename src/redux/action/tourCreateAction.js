import axios from "axios";


export const createTour = (data) => {

    console.log(data, 'data')

    const myFormData = new FormData();

    myFormData.append("title", data?.nameOfTheTour)
    myFormData.append("description", data?.mainDescription)
    myFormData.append("language", data?.language)
    myFormData.append("amount_of_days", data?.amountOfDays)
    myFormData.append("min_people", data?.minPeople)
    myFormData.append("max_people", data?.maxPeople)
    myFormData.append("min_age", data?.min)
    myFormData.append("max_age", data?.max)
    myFormData.append("difficulty_level", data?.difficultyLevel)
    myFormData.append("comfort_level", data?.comfortLevel)
    myFormData.append("tour_currency", data?.currency)
    myFormData.append("type_tour", data?.typeTour)
    myFormData.append("recommendations", data?.recommendations)
    myFormData.append("list_of_things", data?.necessaryThings)
    myFormData.append("insurance_conditions", data?.insurance)
    myFormData.append("cancel_reservation", data?.cancelReservation)

    for (let i = 0; i < data.included.length; i++) {
        myFormData.append(`included[${i}]included`, data.included)
    }

    for (let i = 0; i < data.notIncluded.length; i++) {
        myFormData.append(`not_included[${i}]not_included`, data.notIncluded)
    }

    myFormData.append("address_point", data?.collectionPointCity)
    myFormData.append("description_point", data?.collectionPointDesc)

    for (let i = 0; i < data?.tourImages?.length; i++) {
        myFormData.append(`tour_images[${i}]image`, data?.tourImages[i])
    }


    for (let i = 0; i < data.program.length; i++) {
        myFormData.append(`days[${i}]title`, data.program[i]?.title);
        myFormData.append(`days[${i}]description`, data.program[i]?.description);
        for (let j = 0; j < data.program[i].ImgFile?.length; j++) {
            myFormData.append(`days[${i}]days_images[${j}]image`, data.program[i].ImgFile[j]);
        }
    }

    myFormData.append("accommodations[0]description", data?.accommodations[0]?.description)

    for (let i = 0; i < data?.accommodations[0]?.accommodationImages?.length; i++) {
        myFormData.append(`accommodations[0]accommodation_images[${i}]image`, data?.accommodations[0]?.accommodationImages[i])
    }

    for (let i = 0; i < data.place.length; i++) {
        myFormData.append(`place[${i}]amount_days`, data.place[i].qtyNight);
        for (let j = 0; j < data.place[i].place_residence.length; j++) {
            myFormData.append(`place[${i}]place_residence[${j}]title`, data.place[i]?.place_residence[j].title);
            myFormData.append(`place[${i}]place_residence[${j}]description`, data.place[i]?.place_residence[j].description);
            myFormData.append(`place[${i}]place_residence[${j}]type_accommodation`, data.place[i]?.place_residence[j].type);
            for (let k = 0; k < data.place[i].place_residence[j].file?.length; k++) {
                myFormData.append(`place[${i}]place_residence[${j}]place_residence_images[${k}]image`, data.place[i].place_residence[j].file[k]);
            }
        }
    }

    for (let i = 0; i < data?.questions?.length; i++) {
        myFormData.append(`question[${i}]question`, data?.questions[i]?.questionTour)
        myFormData.append(`question[${i}]answer`, data?.questions[i]?.answerTour)
    }

    for (let i = 0; i < data.activities?.length; i++) {
        myFormData.append(`activity[${i}]activity`, data.activities[i])
    }

    for (let i = 0; i < data.countriesMap?.length; i++) {
        myFormData.append(`country[${i}]country`, data.countriesMap[i])
    }

    for (let i = 0; i < data.categories?.length; i++) {
        myFormData.append(`collection[${i}]collection`, data.categories[i])
    }

    for (let i = 0; i < data.locationMap?.length; i++) {
        myFormData.append(`tourist_region[${i}]region`, data.locationMap[i])
    }







    return async (dispatch) => {
        await axios({
            method: "post",
            url: "http://16.171.152.174/tour_create/",
            data: myFormData,
            headers: {'Content-Type': `multipart/form-data; `}
        }).then(function (response) {
            dispatch({type: 'CREATE_TOUR', payload: response.data})
            console.log(response.data, 'res');
        }).catch(function (response) {
            //handle error
            console.log(response, 'err');
        });
    }
}