import React from 'react';

function Select(props){
    return (
        <select name="weatherSlect" className='form-control' onChange={ props.getCountryWeather }>
            {   
                props.data.map( (item, index) => ( item.country === 'UA' ? <option key={item.id} value={item.id}> {item.name} </option> : null ) ) 
            }
        </select>
    )
}

export default Select;