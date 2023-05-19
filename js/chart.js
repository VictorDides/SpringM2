const examen1 = document.getElementById('hemograma');
const examen2 = document.getElementById('plipidico');
const examen3 = document.getElementById('colesterol');
const examen4 = document.getElementById('orina');

new Chart(examen1, {
  type: 'bar',
  data: {
    labels: ['Esperado ', 'Obtenido'],
    datasets: [{
      label: 'Hemograma',
      data: [12,3],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(examen2, {
    type: 'bar',
    data: {
      labels: ['Esperado ', 'Obtenido'],
      datasets: [{
        label: 'Perfil.Lipidico',
        data: [12, 21],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
new Chart(examen3, {
    type: 'line',
    data: {
      labels: ['Esperado ', 'primer resultado ', 'Segundo Resultado'],
      datasets: [{
        label: 'Colesterol',
        data: [15, 20, 17],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  

new Chart(examen4, {
    type: 'line',
    data: {
      labels: ['Esperado ', 'primer resultado ', 'Segundo Resultado'],
      datasets: [{
        label: 'Orina',
        data: [50, 21, 3],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });