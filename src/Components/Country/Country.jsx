import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)

    const handleVisited = ()=>{
        setVisited(!visited, name)

    }



    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple': 'white'}}><span>Name:</span>  {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4><span>Population:</span> {population}</h4>
            <h4><span>Area:</span> {area}</h4>
            <h4><span>Code: </span>{cca3}</h4>
            <button onClick={()=>{handleVisitedCountry(country)}}>Mark as Visited</button> <br /> <br />
            <button onClick={handleVisited}>{visited?"Visited":"Interest to visit"}</button>
            
            { visited?'  Done': ' I want to visit this country'}
            
            {/* {visited && " 'I have visted this country'"} */} <br /><br />
            {name.common=='Bangladesh'?"My Beloved Motherland":"Part of World"}
        </div>
    );
};

export default Country;