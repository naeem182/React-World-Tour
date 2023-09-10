import "./Country.css"

const Country = ({ country }) => {

    const { name, flags, population, area } = country;
    return (
        <div className="country">
            <div className="">
                <h3>country: {name?.common}</h3>
                <img src={flags.png} alt="" />
                <p>poulation:{population}</p>
                <p>Area:{area}</p>
                <button style={{
                    background: "purple"
                }}>visit</button>
            </div>
        </div>
    )
}

export default Country
