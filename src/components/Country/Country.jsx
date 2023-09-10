import { useState } from "react";
import "./Country.css"

const Country = ({ country, handlevisitedCountries, handlevisitedFlag }) => {

    const { name, flags, population, area } = country;

    const [visited, setvisited] = useState(false);
    //
    const handlevisit = () => {
        setvisited(!visited)
    }


    // console.log(handlevisitedCountries)
    return (
        // conditional css
        <div className={`country ${visited && 'visited'}`}>
            <div className="">
                <h3>country: {name?.common}</h3>
                <img style={{
                    height: "100px"
                }} src={flags.png} alt="" />
                <p>poulation:{population}</p>
                <p>Area:{area}</p>
                {/* 2 onclick in one button ............*/}
                <button
                    style={{
                        background: "purple"
                    }}
                    onClick={() => {
                        handlevisitedCountries(country);
                        handlevisitedFlag(country.flags.png);
                    }}
                >
                    Marks as read
                </button>
                {/* .................. */}
                {/* <button style={{
                    background: "purple"
                }} onClick={() => handlevisitedFlag(country.flags.png)}>Marks as flag</button> */}
                {/* <button style={{
                    background: "purple"
                }} onClick={handlevisit}>visit</button> */}
                {/* //dynaic button */}
                <button style={{
                    background: "purple"
                }} onClick={handlevisit}>{visited ? "visited" : "going"}</button>
                {/* button click to show something  */}
                {visited && "i have visited this country"}
            </div>
        </div >
    )
}

export default Country
