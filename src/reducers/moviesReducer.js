
const moviesReducer = (
    state = {
        movies: [],
        disabledInput: false
    }
    , action) => {
    switch (action.type) {

        case 'SEARCH':
            // console.log(action.data.movies)
            return {
                ...state,
                movies: action.data.movies,
                query: action.data.query,
                isLoading: action.data.isLoading
            }

        case 'LOADING':
            return {
                ...state,
                isLoading: action.data.isLoading
            }

        case 'DISABLEDINPUT':
            return {
                ...state,
                disabledInput: action.data.disabledInput
            }

        default:
            return state;
    }
}
export default moviesReducer;