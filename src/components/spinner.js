import React from 'react'
import './spinner.css'

class Spinner extends React.Component {
    render() {
        return (
            <div className='spinner'>
                <div className='dot'>
                    <span className='one'></span>
                    <span className='two'></span>
                </div>
                <div className='dot dot2'>
                    <span className='one'></span>
                    <span className='two'></span>
                </div>
                <div className='dot dot3'>
                    <span className='one'></span>
                    <span className='two'></span>
                </div>
            </div>
        )
    }
}
export default Spinner
