window.addEventListener('load', start);

function start() {
  console.log('pagina caregada');
  changeColor();
}

function changeColor() {
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;

  // colocando a cor no h2
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.getElementById('color').innerHTML = ': ' + color;

  let colorRed = 'rgb(' + red + ',' + 0 + ',' + 0 + ')';
  document.getElementById('red').style.backgroundColor = colorRed;

  let colorGreen = 'rgb(' + 0 + ',' + green + ',' + 0 + ')';
  document.getElementById('green').style.backgroundColor = colorGreen;

  let colorBlue = 'rgb(' + 0 + ',' + 0 + ',' + blue + ')';
  document.getElementById('blue').style.backgroundColor = colorBlue;

  // colocar rgb na div boxcolor
  document.getElementById('boxColor').style.backgroundColor = color;
}

// evento para input de cores no style
document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);
