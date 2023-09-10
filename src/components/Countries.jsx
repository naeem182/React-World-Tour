import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country/Country";
import "./Country-container.css"

const Countries = () => {

    const [countries, setcountries] = useState([]);
    //country show in upper
    const [visitedCountries, setvisitedCountries] = useState([])
    //flag show in upper
    const [visitedFlag, setvisitedFlag] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = 'https://restcountries.com/v3.1/all';
                const res = await fetch(URL);
                const data = await res.json();
                console.log(data);
                setcountries(data)

            } catch (error) {
                console.log(error)
            }
        };
        fetchData();

    }, [])
    /////////
    const handlevisitedCountries = (country) => {
        console.log("add this to your visited country");
        // console.log(country)  
        const newvisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newvisitedCountries)
    }
    ///////////
    const handlevisitedFlag = (flag) => {
        // console.log('fag')
        const newvisitedFlag = [...visitedFlag, flag];
        setvisitedFlag(newvisitedFlag)
    }


    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {/* visited country */}
            <div>
                <h5>visited countries: {visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map(country => <li key={country.cca3}>{country.name.common}{ } </li>)}

                </ul>
            </div>
            {/* /////flag */}
            <div>
                <h5>visited countries flag</h5>
                <ul>

                    {visitedFlag.map(flag => <img style={{
                        height: "100px",
                        width: "100px"
                    }} src={flag} ></img>)}
                </ul>
            </div>

            {/* display */}
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country}
                        handlevisitedCountries={handlevisitedCountries}
                        handlevisitedFlag={handlevisitedFlag}

                    ></Country>)
                }
            </div>
        </div>
    )
}

export default Countries