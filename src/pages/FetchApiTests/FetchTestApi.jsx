import React from 'react'

const FetchApi = (props) => {
    const { weathers } = props;
    console.log(weathers);
    if(!weathers || weathers.lenght === 0) return <p>No weather sorry?</p>

    return (
        <ul>
            <h2>Weather</h2>
            {weathers.map((weather) => {
                return(
                    <li key={weather.id}>
                        <span style={dateSpan}>{weather.date}</span>
                        <span style={temperatureSpan}>{weather.temperatureC} °C</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default FetchApi;

const dateSpan = {
    color: 'orange',
    margin: '10px'
};

const temperatureSpan = {
    color: 'cyan'
};