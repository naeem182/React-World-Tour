import "./Country.css"

const Country = ({ country }) => {

    const { name } = country;
    return (
        <div className="country">
            <h3>country: {name?.common}</h3>
        </div>
    )
}

export default Country
