import React from 'react'

const Header = ({ handleStart, handlePause, handleReset, handleTimerValue, timerValue }) => {

    return (
        <div className='header'>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
            <input
                type='number'
                max={10}
                min={1}
                value={timerValue}
                onChange={(e) => handleTimerValue(e.target.value)}
            />
        </div>
    )
}

export default Header;
