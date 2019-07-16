import React from 'react';
import WeatherSearchResults from '../Components/WeatherSearchResults.jsx';
import WeatherSearchbox from '../Components/WeatherSearchbox.jsx';

const WeatherContainer = () => {
    return (
            <div>
                <p>Project set up</p>
                <WeatherSearchbox/>
                <WeatherSearchResults/>
            </div>
    );
    
}
export default WeatherContainer;