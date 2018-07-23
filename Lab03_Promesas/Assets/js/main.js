const estado = {
  tareas: [],
  pestana: 0,
  cargando: true,
};

const render = (lRender) => {
  const root = document.getElementById('root');
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }
  const header = document.createElement('div');
  header.className = 'header';
  root.appendChild(header);

  const tareas = document.createElement('div');
  tareas.className = 'tareas';
  root.appendChild(tareas);

  const inputArea = document.createElement('div');
  inputArea.className = 'ia';
  root.appendChild(inputArea);
  const input = document.createElement('input');
  input.type = 'text';
  inputArea.appendChild(input);
  const but = document.createElement('button');
  but.innerHTML = 'Agregar';
  inputArea.appendChild(but);

  if (lRender.cargando) {
    const load = document.createElement('div');
    load.className = 'loader';
    tareas.appendChild(load);
  }

  but.onclick = () => {
    const nuevaTarea = {
      title: input.value,
      isCompleted: false,
    };
    estado.tareas.push(nuevaTarea);
    render(estado);
  };

  const headerElements = [];

  for (let i = 0; i < 3; i += 1) {
    const elementoHeader = document.createElement('div');
    elementoHeader.className = 'he off';
    elementoHeader.onclick = () => {
      estado.pestana = i;
      render(estado);
    };
    header.appendChild(elementoHeader);
    headerElements.push(elementoHeader);
  }

  headerElements[0].innerHTML = '<p>Todas las tareas</p>';
  headerElements[1].innerHTML = '<p>Completadas</p>';
  headerElements[2].innerHTML = '<p>Por Completar</p>';
  headerElements[lRender.pestana].className = 'he on';

  for (let j = 0; j < lRender.tareas.length; j += 1) {
    const tarea = document.createElement('div');
    tarea.className = `tarea ${lRender.tareas[j].isCompleted}`;
    tarea.innerHTML = `${lRender.tareas[j].title}`;
    tarea.onclick = () => {
      lRender.tareas[j].isCompleted = !lRender.tareas[j].isCompleted;
      render(lRender);
    };
    if (lRender.pestana === 0) {
      tareas.appendChild(tarea);
    } else if (lRender.pestana === 1) {
      if (lRender.tareas[j].isCompleted) {
        tareas.appendChild(tarea);
      }
    } else if (lRender.pestana === 2) {
      if (!lRender.tareas[j].isCompleted) {
        tareas.appendChild(tarea);
      }
    }
  }
};

render(estado);
fetch('https://raw.githubusercontent.com/samuelchvez/todos-fake-json-api/master/db.json')
  .then(respuesta => respuesta.json())
  .then((respuestaJSON) => {
    respuestaJSON.forEach(element => estado.tareas.push(element));
    estado.cargando = false;
    render(estado);
  });
