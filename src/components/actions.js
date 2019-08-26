import {HANDLE_CHANGE, FETCH_DATA_SUCCES, FETCH_DATA_ERROR, FETCH_DATA_SENDING} from "./actionTypes.js"


const appid = '418693093981fcd6319e82dfac9856fc'

const handleChange = (e) => ({
    type: HANDLE_CHANGE,
    payload: e.target.value
  })
export const handleChangeAsync = (e) => (dispatch) => {
      dispatch(handleChange(e));
}

const fetchData = (data) => {
    return {
        type: FETCH_DATA_SUCCES,
        loading: false,
        data
    }
}
const fetchDataSending = () => {
    return {
        type: FETCH_DATA_SENDING,
        loading: true
    }
}
const fetchDataError = (error) => {
    return {
        type: FETCH_DATA_ERROR,
        error,
        errorMsg: "There is no such city, check if you didn't make any typo"
    }
}
export const fetchWeather = (event) => {
    event.preventDefault()
    return (dispatch,getState) => {
        const state = getState()
        dispatch(fetchDataSending())
        return (
            setTimeout(() => {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${state.userInput}&units=metric&APPID=${appid}`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json()
                    } else {
                        return Promise.reject(resp)
                    }
                })
                .then(resp => dispatch(fetchData(resp)))
                .catch(error => {
                    console.log(error)
                    dispatch(fetchDataError(error))
                })
            },2000)
          )
    }
}
