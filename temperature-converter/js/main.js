//Write your pseduo code first! 
//1 - take in one type of temperature (temp)
//2 - multiply by the respective conersion (conversion)
//3 - post new temperature in new (newTemp)

document.querySelector('#convert').addEventListener('click', runConversion)

function runConversion(){
    let oldTemperature = document.querySelector('#oldTemp').value
    let newTemperature = oldTemperature * 1.8 + 32
    document.querySelector('#newTemp').innerText = newTemperature + ' (in fahrenheit)';
}