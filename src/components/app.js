import React from 'react';
import ReactDOM from 'react-dom';
import myFetch from '../myFetch';
import 'bootstrap/dist/css/bootstrap.css';

import Select from './select';
import WeatherContainer from './weatherContainer';


function compare(a, b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            currentCityWeather : null,
        };
    };

    componentWillMount() {
        myFetch('./city-list.json')
            .then( res => { this.setState({data : res}) } )
    };

    getWeather = (e) => {
        myFetch('http://api.openweathermap.org/data/2.5/weather?id='+ e.currentTarget.value + '&APPID=b616a62c54d7d4496fea6d08863bccfd')
            .then( res => this.setState({currentCityWeather : res}) )
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Weather by Alex</h1>
                {this.state.data === null ? null : <Select getCountryWeather={this.getWeather} data={this.state.data.sort(compare)} /> }  
                {this.state.currentCityWeather === null ? null : <WeatherContainer weatherObj={this.state.currentCityWeather} /> }
            </div>
        )
    }
}


export default App;