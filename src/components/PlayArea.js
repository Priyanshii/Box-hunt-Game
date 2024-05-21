import React from 'react'

const PlayArea = ({ showObject, location, handleDynamicTable, handleObjectLocationChange }) => {

    const handleObjectClick = () => {
        handleDynamicTable();
        handleObjectLocationChange();
    }

    return (
        <div className='play-area-container'>
            {
                showObject
                &&
                <div style={{ marginLeft: `${location.x}px`, marginTop: `${location.y}px` }} className='pixel-object' onClick={handleObjectClick}>
                </div>
            }
        </div>
    )
}

export default PlayArea;