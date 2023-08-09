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