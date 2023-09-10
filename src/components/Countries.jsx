import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country/Country";
import "./Country-container.css"

const Countries = () => {

    const [countries, setcountries] = useState([]);

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
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries