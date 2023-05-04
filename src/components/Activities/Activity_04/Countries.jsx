import Country from "./Context";
import { useState, useEffect } from "react";

const Countries = () => {

    const country_name = "island";

    const [country, setCountry] = useState();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country_name}`)
        .then(response => response.json())
        .then(json => setCountry(json[0].population));
    }, [country]);

    return (
        <Country.Provider value={country_name}>
            <>
                <h1>A população de {country_name} é de {country}</h1>
            </>
        </Country.Provider>
    )
}

export default Countries;