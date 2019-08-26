const initialState = {
    userInput: "",
    city: "",
    country: "",
    temp: null,
    weather: [],
    loading: false,
    error: null
}
export const inputReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'HANDLE_CHANGE':
            return Object.assign({}, state, {
                userInput: action.payload
            })
        case 'FETCH_DATA_SUCCES':
            return Object.assign({}, state, {
                weather: [action.data.weather[0].main, action.data.weather[0].description, action.data.weather[0].icon],
                city: action.data.name,
                country: action.data.sys.country,
                temp: Math.round(action.data.main.temp),
                loading: action.loading,
                error: null
            })
        case 'FETCH_DATA_SENDING':
            return Object.assign({}, state, {
                city: "",
                country: "",
                temp: null,
                weather: {},
                loading: action.loading,
                error: null,
                errorMsg: null
            })
        case 'FETCH_DATA_ERROR':
            return (
                Object.assign({}, state=initialState, {
                    error: action.error,
                    errorMsg: action.errorMsg
                })
          )

        default:
            return state
    }
}
