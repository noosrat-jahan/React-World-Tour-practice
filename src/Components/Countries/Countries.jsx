import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setvisitedCountries] = useState([]);

    
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    const handleVisitedCountry = country =>{
        console.log('add this to ypur country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setvisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h3><span>Countries:</span> {countries.length} </h3>
            <h3>Visited Countries: {visitedCountries.length}</h3>
            <div>
                <ul>
                    {
                        visitedCountries.map(country =>
                             <li type="1" key={country.ccn3}>
                                {country.name.common}
                            </li>)
                    }
                </ul>
            </div>

            
            <div className="country-container">
                {
                    countries.map(country => <Country 
                        key={country.cca3} 
                        handleVisitedCountry = {handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;