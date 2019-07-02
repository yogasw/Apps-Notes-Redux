const initialState = {
    data: [],
    isLoading: false,

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
            return {
                ...state,
                isLoading: false,
                data: [action.payload.data.values.data[0], ...state.data]
            };

        default:
            return state;
    }
}