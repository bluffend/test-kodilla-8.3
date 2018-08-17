'use strict';

startProgram ();

function startProgram () {
  var output = document.getElementById('output');
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var temperatureC;
  var temperatureF;

  clearBox(output);
  displayText('Click the button and type in temperature');

// button Celsius -> Fahrenheit
  button1.addEventListener('click',function(){
  temperatureC = window.prompt('Type in temperature in Celsius');
  temperatureC = temperatureC.split(",").join(".");
  temperatureC = parseFloat(temperatureC); 
  verifyCalculateAndDisplay(temperatureC,calculateCtoF,'Celsius','Fahrenheit');
  });

// button Fahrenheit -> Celsius
  button2.addEventListener('click',function(){
  temperatureF = window.prompt('Type in temperature in Fahrenheit');
  temperatureF = temperatureF.split(",").join(".");
  temperatureF = parseFloat(temperatureF); 
  verifyCalculateAndDisplay(temperatureF,calculateFtoC,'Fahrenheit','Celsius');
  });

}
  
function verifyCalculateAndDisplay (temperatureIn,callCalculateTempFunction,tempInName,tempOutName) {
    clearBox(output);
    if (isNaN(temperatureIn)) {
        displayText (temperatureIn + ' is not a number. Please type in a number.');
    }
    else {
        var temperatureOut = callCalculateTempFunction(temperatureIn);
        if (tempInName === 'Celsius') {
            displayText('Temperature is '+temperatureIn+' in '+tempInName+'. It is '+temperatureOut+' in '+tempOutName+ weatherConditions(temperatureIn));
        }
        else {
            displayText('Temperature is '+temperatureIn+' in '+tempInName+'. It is '+temperatureOut+' in '+tempOutName+ weatherConditions(temperatureOut));
        }
    }
}


// function: change Celsius to Fahrenheit 
function calculateCtoF(tempC) {
    var result = (tempC * 1.8) + 32;
    return result;
}

// function: change Fahrenheit to Celsius 
function calculateFtoC(tempF) {
    var result = (tempF - 32)/1.8;
    return result;
}

//function: explains what happens in given temperature
function weatherConditions(tempC) {
    if (tempC < 0){
        return '. It is below zero Celsius. It is freezing cold.';
    }
    else if (tempC === 0) {
        return '. It is exactly zero degrees Celsius. Water starts to freeze.';
    }
    else if (tempC > 0 && tempC <= 15) {
        return '. It is above zero but still cold. Wear a jacket.';
    }
    else if (tempC > 15 && tempC <100){
        return '. It is more than 15 degrees Celsius. Nice and warm.';
    }
    else {
        return '. It is 100 degrees Celsius or more. Water is boiling !';
    }
}

// function: displays information
function displayText(text) {
    output.innerHTML = text + "<br><br>" + output.innerHTML;
}
// function: clears "output" div
function clearBox(elementID) {
    elementID.innerHTML = "";
}