window.addEventListener('load', start);

function start() {
  console.log('pagina caregada');
  changeColor();
}

function changeColor() {
  // get inputs on HTML
  let red = document.getElementById('red').value;
  let green = document.getElementById('green').value;
  let blue = document.getElementById('blue').value;

  // input colors on body
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.getElementById('color').innerHTML = ': ' + color;

  // input red on RGB box
  let colorRed = 'rgb(' + red + ',' + 0 + ',' + 0 + ')';
  document.getElementById('red').style.backgroundColor = colorRed;

  // input green on RGB box
  let colorGreen = 'rgb(' + 0 + ',' + green + ',' + 0 + ')';
  document.getElementById('green').style.backgroundColor = colorGreen;

  // input blue on RGB box
  let colorBlue = 'rgb(' + 0 + ',' + 0 + ',' + blue + ')';
  document.getElementById('blue').style.backgroundColor = colorBlue;

  // put rgb on div boxcolor
  document.getElementById('boxColor').style.backgroundColor = color;
}

// evetn to input  colors on style
document.getElementById('red').addEventListener('input', changeColor);
document.getElementById('green').addEventListener('input', changeColor);
document.getElementById('blue').addEventListener('input', changeColor);
