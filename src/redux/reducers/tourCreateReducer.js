

const initialState = {
    newTour: []
}

export const createTourReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TOUR':
            return {...state, newTour: [...state.newTour, action.payload]}

        default:
            return state
    }
}