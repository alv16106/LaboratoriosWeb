const estado = {
  graficas: [],
};

function fibonacci(n) {
  let a = 1;
  let b = 0;
  let temp;
  const secuencia = [];
  while (n >= 0) {
    temp = a;
    a += b;
    b = temp;
    secuencia.push(b);
    n -= 1;
  }
  secuencia.pop();
  return secuencia;
}

const render = (lRender) => {
  const root = document.getElementById('root');
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Input area
  const inputArea = document.createElement('div');
  inputArea.className = 'ia';
  root.appendChild(inputArea);
  const input = document.createElement('input');
  input.type = 'text';
  inputArea.appendChild(input);
  const but = document.createElement('button');
  but.innerHTML = 'Generar';
  // Hace push a un nuevo objeto con la fecha y el valor ingresado
  but.onclick = () => {
    if (!input.value) {
      return;
    }
    lRender.graficas.push({
      num: input.value,
      date: new Date(),
    });
    render(lRender);
  };
  inputArea.appendChild(but);

  // Contenido, tendra todos los divs con graficas
  const contenido = document.createElement('div');
  contenido.className = 'contenido';
  root.appendChild(contenido);

  // Generacion de las graficas que ya estan hechas
  for (let i = lRender.graficas.length; i > 0; i -= 1) {
    const element = document.createElement('div');
    element.className = 'element';

    const fecha = document.createElement('h2');
    fecha.innerHTML = lRender.graficas[i - 1].date;
    const grafica = document.createElement('div');
    grafica.className = 'grafica';

    element.appendChild(fecha);
    element.appendChild(grafica);
    contenido.appendChild(element);

    const secuencia = fibonacci(lRender.graficas[i - 1].num);
    // Crea barritas proceduralmente
    for (let j = 0; j < secuencia.length; j += 1) {
      const barrita = document.createElement('div');
      barrita.className = 'barrita';
      barrita.style = `height: ${secuencia[j] * 2}rem`;
      grafica.appendChild(barrita);
    }
  }
};

render(estado);
