import { useState } from "react";
import "./Country.css"

const Country = ({ country }) => {

    const { name, flags, population, area } = country;

    const [visited, setvisited] = useState(false);
    //
    const handlevisit = () => {
        setvisited(!visited)
    }



    return (
        <div className="country">
            <div className="">
                <h3>country: {name?.common}</h3>
                <img style={{
                    height: "100px"
                }} src={flags.png} alt="" />
                <p>poulation:{population}</p>
                <p>Area:{area}</p>
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
        </div>
    )
}

export default Country
