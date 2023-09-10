import { useEffect } from "react";
import { useState } from "react"

const Countries = () => {

    const [count, setcount] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = 'https://restcountries.com/v3.1/all';
                const res = await fetch(URL);
                const data = await res.json();
                console.log(data);

            } catch (error) {
                console.log(error)
            }
        };
        fetchData();

    }, [])
    return (
        <div>
            <h3>Countries</h3>
        </div>
    )
}

export default Countries
