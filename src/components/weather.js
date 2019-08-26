import React from 'react'
import { connect } from 'react-redux'
import './weather.css'
import { handleChangeAsync, fetchWeather } from './actions.js'
import Spinner from './spinner.js'
import { CheckButton, ExitButton } from './buttons.js'



class Weather extends React.Component {
    render() {
        return (
              <div className="container">
                  <div className='header'>
                      <h3>POCKET WEATHER</h3>
                      <form onSubmit={this.props.fetchWeather} autoComplete="off">
                          <input placeholder="Choose your city..." onChange={this.props.handleChangeAsync} type="text" name="city" required></input>
                          <CheckButton />
                      </form>
                      <ExitButton />
                      <span className='exit-txt'>exit</span>
                      <span className='check-txt'>check</span>
                  </div>
                  <div className='container-content'>
                      <div className='container-content-main'>
                          <div className='container-content-glass'></div>
                      {this.props.loading ?
                          <Spinner /> :
                          null
                      }
                      {this.props.city ?
                          <div className="filter">
                              <div className='weather-picture'>
                                  <img className='picture' src={`http://openweathermap.org/img/wn/${this.props.weather[2]}@2x.png`} alt={`${this.props.weather[1]}`} width="200" height="200" />
                              </div>
                              <div className='weather-info'>
                                  <h3 className='typewriter'>{this.props.temp}&deg;C, {this.props.weather[0]}</h3>
                                  <h3 className='typewriter2'>{this.props.city}, {this.props.country}</h3></div>
                          </div> :
                          null
                      }
                      {this.props.error ?
                              <h3 className="error">{this.props.errorMsg}</h3> :
                          null
                      }
                      </div>
                  </div>
              </div>
        )
    }
}

const mapStateToProps = (state) => ({
    country: state.country,
    weather: state.weather,
    city: state.city,
    temp: state.temp,
    loading: state.loading,
    errorMsg: state.errorMsg,
    error: state.error
})
const mapDispatchToProps = (dispatch) => {
    return {
        //handleChange: (input) => dispatch(handleChange(input))
        handleChangeAsync: (e) => dispatch(handleChangeAsync(e)),
        fetchWeather: (event) => dispatch(fetchWeather(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
