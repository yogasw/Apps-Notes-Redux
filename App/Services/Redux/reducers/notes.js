const initialState = {
    data: [],
    isLoading: false,
    categories: []
};

export default notes = (state = initialState, action) => {
    switch (action.type) {

        //GET ALL NOTES
        case 'GET_NOTES_PENDING':

            return {
                ...state,
                isLoading: true
            };
        case 'GET_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'GET_NOTES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.values
            };

        //GET CATEGORIES
        case 'GET_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'GET_CATEGORIES_FULFILLED':
            console.log("Isi state");
            console.log(state);
            console.log("Isi Payload Action");
            console.log(action);
            return {
                ...state,
                isLoading: false,
                categories: action.payload.data.values
            };

        //INSERT NOTES
        case 'INSERT_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'INSERT_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'INSERT_NOTES_FULFILLED':
            console.log("ISI PROPS Semua");
            console.log(state);
            return {
                ...state,
                isLoading: false,
                data: [action.payload.data.values.data[0], ...state.data]
            };

        default:
            return state;
    }
}