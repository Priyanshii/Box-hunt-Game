import React, { useRef, useState } from 'react';
import DynamicTable from './components/DynamicTable';
import Header from './components/Header';
import PlayArea from './components/PlayArea';
import './index.css';

function App() {

    const [showObject, setShowObject] = useState(false);
    const [timerValue, setTimerValue] = useState(0);

    const timeTrackerId = useRef(null);
    const timerId = useRef(null);
    const elapsedTime = useRef(0);
    const numberOfTimes = useRef(0);

    const [dTable, setDTable] = useState([]);
    const [location, setLocation] = useState({ x: Math.random() * 400, y: Math.random() * 400 });

    const handleObjectLocationChange = () => {
        const randomX = Math.random() * 400;
        const randomY = Math.random() * 400;
        setLocation({ x: randomX, y: randomY });
    }

    const handleStart = () => {
        setShowObject(true);

        if (timerId.current) {
            clearInterval(timerId.current);
        }

        timerId.current = setInterval(() => {
            handleObjectLocationChange();
            numberOfTimes.current = numberOfTimes.current + 1;
        }, (timerValue * 1000));

        if (timeTrackerId.current) {
            clearInterval(timeTrackerId.current);
        }

        timeTrackerId.current = setInterval(() => {
            elapsedTime.current = elapsedTime.current + 100;
        }, 100);
    }

    const handlePause = () => {
        setShowObject(false);
        clearInterval(timeTrackerId.current);
        clearInterval(timerId.current);
        elapsedTime.current = 0;
        numberOfTimes.current = 0;
    }

    const handleReset = () => {
        setShowObject(false);
        setDTable([]);
        clearInterval(timeTrackerId.current);
        clearInterval(timerId.current);
        elapsedTime.current = 0;
        numberOfTimes.current = 0;
        setTimerValue(0);
    }

    const handleDynamicTable = () => {
        let baseValue = elapsedTime.current - (timerValue * (numberOfTimes.current) * 1000);
        let calculatedReactionTime;
        if (numberOfTimes.current > 0) {
            calculatedReactionTime = baseValue + (timerValue * 1000);
        } else {
            calculatedReactionTime = baseValue;
        }
        setDTable((prevTable) => {
            return [...prevTable, calculatedReactionTime];
        })
    }

    const handleTimerValue = (value) => {
        setTimerValue((prevValue) => value);
    }

    return (
        <div className='main-container'>
            <Header handleStart={handleStart} handlePause={handlePause} handleReset={handleReset} handleTimerValue={handleTimerValue} timerValue={timerValue} />
            <PlayArea showObject={showObject} location={location} handleDynamicTable={handleDynamicTable} handleObjectLocationChange={handleObjectLocationChange} />
            <DynamicTable dTable={dTable} />
        </div>
    );
}

export default App;
