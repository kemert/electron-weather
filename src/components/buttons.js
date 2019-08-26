import React from 'react'
import './weather.css'

const electron = window.require('electron')
const remote = electron.remote

const eName = "mouseDown"
let baseClass = ""

const mouseDown = (e) => {
    baseClass = e.target.className
    e.target.className += ` ${eName}`
}
const mouseUp = (e) => {
    if (baseClass !== "") {
        e.target.className = `${baseClass}`
    }
}
const mouseOut = (e) => {
    if (e.target.className ===  `${baseClass} ${eName}`) {
        e.target.className = `${baseClass}`
        baseClass = ""
    } else {}
}

class CheckButton extends React.Component {
      render() {
          return(
              <input type="submit" value="" className="check" onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseOut={mouseOut}></input>
          )
      }
}
class ExitButton extends React.Component {
      render() {
          const click = () => {
              let w = remote.getCurrentWindow()
              w.close()
          }
          return(
              <button className='exit' onClick={click} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseOut={mouseOut}></button>
          )
      }
}
export {CheckButton, ExitButton}
