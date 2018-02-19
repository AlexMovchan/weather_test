import React from 'react';
import Moment from 'react-moment';
import './weatherContainer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/fontawesome-free-regular'

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.src} alt="Card image cap" />
            <div className="card-body special-card-body">
                <h5 className="card-title text-center">{props.name}</h5>
                <hr/>  
                <p className="card-text text-center">{props.value}</p>
            </div>
        </div>
    )
}

function WeatherContainer(props){
    return ( 
        <div className='jumbotron'>
            <h2 className='text-center'> { props.weatherObj.name } <img src={'http://openweathermap.org/img/w/' + props.weatherObj.weather[0].icon + '.png'} alt='cloud-icon'/></h2>
            <div className="list-group weather-container">
                <li>
                    <Card src={'./img/clouds.png'} name={"Хмарність"} value={props.weatherObj.clouds.all +'%'} />
                </li>
                <li>
                    <Card src={'./img/thermometer.png'} name={"Температура"} value={Math.round(props.weatherObj.main.temp - 275) + '°' } />
                </li>
                <li>
                    <Card src={'./img/preassure.png'} name={"Тиск"} value={Math.round(props.weatherObj.main.pressure) +'мм/рт.ст.' } />
                </li>
                <li>
                    <Card src={'./img/humidity.png'} name={"Вологість"} value={Math.round(props.weatherObj.main.humidity) +'%' } />
                </li>
                <li>
                <div className="card" style={ {height: '100%'} }>
                <div className="compass">
                    <div className="direction">
                        <p>NE<span>{ props.weatherObj.wind.speed }м/с</span></p>
                    </div>
                    <div className="arrow ne" style={ {transform: 'rotate('+ props.weatherObj.wind.deg + 'deg)'} }></div>
                    </div>
                    <div className="card-body special-card-body">
                        <h5 className="card-title text-center">Швидкість вітру</h5>
                        <hr/>  
                        <p className="card-text text-center">{props.weatherObj.wind.speed}м/сек</p>
                    </div>
                </div>
                </li>
                <li>
                    <Card src={'./img/sunrise.png'} name={"Світанок"} value={<span><Moment format="HH:mm">{ new Date(props.weatherObj.sys.sunrise*1000) }</Moment> <FontAwesomeIcon icon={faClock} /></span>} />
                </li>
                <li>
                    <Card src={'./img/sunset.png'} name={"Захід"} value={<span><Moment format="HH:mm">{ new Date(props.weatherObj.sys.sunset*1000) }</Moment> <FontAwesomeIcon icon={faClock} /></span>} />
                </li>
            </div>
        </div>
    )
}

export default WeatherContainer;