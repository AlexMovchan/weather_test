import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/fontawesome-free-solid';
import { faThermometerEmpty } from '@fortawesome/fontawesome-free-solid';
import { faCloudscale } from '@fortawesome/fontawesome-free-brands';
import { faTint } from '@fortawesome/fontawesome-free-solid';
import { faCloudversify } from '@fortawesome/fontawesome-free-brands';


function WeatherContainer(props){
    return ( 
        <div className='jumbotron'>
            <h4> { props.weatherObj.name }</h4>
            <ul className="list-group">
                <li className="list-group-item list-group-item-primary">
                    <FontAwesomeIcon icon={faCloud}/>
                    <span className='text-muted'> Хмарність</span>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={ {width: props.weatherObj.clouds.all +'%'} } aria-valuenow={props.weatherObj.clouds.all} aria-valuemin="0" aria-valuemax="100">{props.weatherObj.clouds.all}%</div>
                    </div>
                </li>
                <li className="list-group-item list-group-item-secondary">
                    <FontAwesomeIcon icon={faThermometerEmpty}/>
                    <span className='text-muted'> Температура</span> : <b>{ Math.round(props.weatherObj.main.temp - 275) }&deg; </b>
                </li>
                <li className="list-group-item list-group-item-success">
                    <FontAwesomeIcon icon={faCloudscale}/>
                    <span className='text-muted'> Тиск</span> : <b>{ Math.round(props.weatherObj.main.pressure) } мм/рт.ст. </b>
                </li>
                <li className="list-group-item list-group-item-danger">
                    <FontAwesomeIcon icon={faTint}/>
                    <span className='text-muted'> Вологість</span> : <b>{ Math.round(props.weatherObj.main.humidity) }% </b>
                </li>
                <li className="list-group-item list-group-item-warning">
                    <FontAwesomeIcon icon={faCloudversify}/>
                    <span className='text-muted'> Швидкість вітру</span> : <b>{ props.weatherObj.wind.speed }м/сек </b>
                </li>
            </ul>
        </div>
    )
}

export default WeatherContainer;