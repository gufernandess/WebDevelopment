import './Temperature.css';



const Temperature = () => {
    
    const celsiusToFahrenheit = celsius => ((celsius * 9/5) + 32).toFixed(2);
    
    const fareinheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5/9).toFixed(2);
    
    const kelvinToCelsiusAndFahrenheit = (kelvin) => JSON.stringify({
        celsius: kelvin - 273.15, fahrenheit: kelvin * 1.8 - 459.4
    });

    const kelvin = JSON.parse(kelvinToCelsiusAndFahrenheit(10,20));
    
    return (
        <div className='Temperature'>
            <h3>Celsius para fahrenheit: {celsiusToFahrenheit(10)}</h3>
            <h3>Fahrenheit para celcius: {fareinheitToCelsius(10)}</h3>
            <h3>Kelvin para celsius e fahrenheit: {kelvin.celsius.toFixed(2) + ' e ' + kelvin.fahrenheit.toFixed(2)}</h3>
        </div>
    );
}

export default Temperature;