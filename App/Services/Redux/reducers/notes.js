const initialState = {
    data: [],
    isLoading: false,
    categories: [],
    nextPage: 1,
    amountsPage: 1,
    amountsNoteApi: 1,
    amountsNote: 1,
    searchBy: 'title',
    search: '',
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
                data: action.payload.data.values,
                nextPage: action.payload.data.next_page,
                amountsPage: action.payload.data.amounts_page,
                amountsNote: action.payload.data.values.length,
                amountsNoteApi: action.payload.data.amounts_note,
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
            return {
                ...state,
                data: newData,
                isLoading: false
            };

        //GET NOTES MORE
        case 'GET_MORE_NOTES_PENDING':
            return {
                ...state,
                //isLoading: true
            };
        case 'GET_MORE_NOTES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'GET_MORE_NOTES_FULFILLED':
            let newNotes;
            if (state.amountsNote < state.amountsNoteApi) {
                newNotes = [...state.data, ...action.payload.data.values];
            } else {
                newNotes = [...state.data];
            }
            return {
                ...state,
                isLoading: false,
                nextPage: action.payload.data.next_page,
                amountsPage: action.payload.data.amounts_page,
                amountsNote: newNotes.length,
                amountsNoteApi: action.payload.data.amounts_note,
                data: newNotes
            };

        //INSERT_CATEGORIES
        case 'INSERT_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'INSERT_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'INSERT_CATEGORIES_FULFILLED':
            console.log(action.payload.data.values.data[0]);
            return {
                ...state,
                categories: [action.payload.data.values.data[0], ...state.categories],
                isLoading: false
            };


        //DELETE CATEGORIES
        case 'DELETE_CATEGORIES_PENDING':
            return {
                ...state,
                isLoading: true
            };
        case 'DELETE_CATEGORIES_REJECTED':
            return {
                ...state,
                isLoading: false
            };
        case 'DELETE_CATEGORIES_FULFILLED':
            let idCategory = action.payload.data.values.id;
            let newCategory = state.categories.filter(function (element, i, array) {
                return element.id != idCategory
            });
            return {
                ...state,
                categories: newCategory,
                isLoading: false
            };

        //CONFIG
        case 'ON_PAGE':
            return {
                ...state,
                onPage: action.payload
            };

        case 'SEARCH_BY':
            return {
                ...state,
                searchBy: action.payload
            };
        case 'SEARCH':
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}