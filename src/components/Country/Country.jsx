

const Country = ({ country }) => {

    const { name } = country;
    return (
        <div>
            <h3>country: {name?.common}</h3>
        </div>
    )
}

export default Country
