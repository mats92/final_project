function convertLength() {
  const inputValue = parseFloat(document.getElementById('value').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if(!isNaN(inputValue)) {
    document.getElementById('result').innerText = 'Please enter a valid number for the value.';
  } 
  
  let convertedValue;

  if (fromUnit != toUnit) {
    if (fromUnit === 'metri') {
      if (toUnit === 'centimetri') {
        convertedValue = inputValue * 100;
      }
      if (toUnit === 'milimetri') {
        convertedValue = inputValue * 1000;
      }
      if (toUnit === 'pēdas') {
        convertedValue = inputValue * 3.28084; 
      }
    }
    if (fromUnit === 'centimetri') {
      if (toUnit === 'metri') {
        convertedValue = inputValue / 100;
      }
      if (toUnit === 'milimetri') {
        convertedValue = inputValue * 10;
      }
      if (toUnit === 'pēdas') {
        convertedValue = inputValue * 0.0328084;
      }
    }
    if (fromUnit === 'milimetri') {
      if (toUnit === 'metri') {
        convertedValue = inputValue / 1000;
      }
      if (toUnit === 'centimetri') {
        convertedValue = inputValue / 10;
      }
      if (toUnit === 'pēdas') {
        convertedValue = inputValue * 0.0032808;
      }
    }

    if (fromUnit === 'pēdas') {
      if (toUnit === 'metri') {
        convertedValue = inputValue / 3.28084;
      }
      if (toUnit === 'centimetri') {
        convertedValue = inputValue / 0.0328084;
      }
      if (toUnit === 'milimetri') {
        convertedValue = inputValue / 0.0032808;
      }
    }
  } else {
    convertedValue = inputValue;
  }

  document.getElementById('result').innerText = `Konvertētā vērtība: ${convertedValue} ${toUnit}`;
}

function mainspriegums() {
  const strava = parseFloat(document.getElementById('strava1').value);
  const sprieguma_veids = document.getElementById('spriegums1').value;
  let jauda = 0;
  
  if (sprieguma_veids === '1-faze') {
    jauda = 220 * strava;
  } else {
    jauda = 400 * strava;
  }
  document.getElementById('jauda1').value = jauda;
}

function lidzspriegums() {
  const strava = parseFloat(document.getElementById('strava2').value);
  const spriegums = parseFloat(document.getElementById('spriegums2').value);

  let jauda = strava * spriegums;
  document.getElementById('jauda2').value = jauda;
}

function temperaturaUzFar() {
  let celsijs = parseFloat(document.getElementById('celsija').value);
  let farenheita = celsijs * 9/5 +32;
  document.getElementById('farenheita').value = farenheita.toFixed(1);
}

function temperaturaUzCel() {
  let farenheita = parseFloat(document.getElementById('farenheita').value);
  let celsijs = (farenheita-32) * 5/9;
  document.getElementById('celsija').value = celsijs.toFixed(1);

}