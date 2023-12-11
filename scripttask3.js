function convertTemperature() {
    //to get user input
    const temperatureInput=document.getElementById('temperature').value;
    const selectedUnit=document.getElementById('unit').value;

    //validate input is a number
    if(isNaN(temperatureInput)){
        alert('Please enter a valid number for the temperature .');
        return;
    }

    //convert temperatuere

    let convertedTemperature;
    let resultUnit;

    if(selectedUnit==='celsius')
    {
        convertedTemperature=(parseFloat(temperatureInput)*9/5)+32;
        resultUnit='Fahrenheit';

    }
    
    else
    {
        convertedTemperature=(parseFloat(temperatureInput)-32)*5/9;
        resultUnit='Celsius';

    }

  // display result
  const resultContainer= document.getElementById('result');
  const unitContainer=document.getElementById('units');
  
  resultContainer.textContent=convertedTemperature;
  unitContainer.textContent=resultUnit;
  
  

}