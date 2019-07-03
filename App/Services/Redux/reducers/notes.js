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
            return {
                ...state,
                isLoading: false,
                data: [action.payload.data.values.data[0], ...state.data]
            };

        //UPDATE NOTES
        case 'UPDATE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'UPDATE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'UPDATE_NOTES_FULFILLED':
            let responId = action.payload.data.values.data[0];
            state.data.map(function (item, key, array) {
                if (item.id === responId.id) {
                    array[key] = responId
                }
            });
            return {
                ...state,
                isLoading: false
            };

        //DELETE NOTES
        case 'DELETE_NOTES_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'DELETE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'DELETE_NOTES_FULFILLED':
            let id = action.payload.data.values.id;
            let newData = state.data.filter(function (element, i, array) {
                return element.id != id
            });
            console.log("Hasil");
            console.log(newData);
            return {
                ...state,
                data: newData,
                isLoading: false
            };


        default:
            return state;
    }
}