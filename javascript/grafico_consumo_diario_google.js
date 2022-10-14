google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(consumo_diario);

function consumo_diario() {

  var dados = google.visualization.arrayToDataTable([
    ['dia', 'consumo(m³)', {role: 'style'}],
    ['01/10', 711, '#007af7'],
    ['02/10', 487, '#007af7'],
    ['03/10', 685, '#007af7'],
    ['04/10', 944, '#007af7'],
    ['05/10', 924, '#007af7'],
    ['06/10', 449, '#007af7'],
    ['07/10', 711, '#007af7'],
    ['08/10', 487, '#007af7'],
    ['09/10', 685, '#007af7'],
    ['10/10', 944, '#007af7'],
    ['11/10', 924, '#007af7'],
    ['12/10', 449, '#007af7'],
    ['13/10', 711, '#007af7'],
    ['14/10', 477, '#007af7'],
    ['15/10', 685, '#007af7'],
    ['16/10', 944, '#007af7'],
    ['17/10', 924, '#007af7'],
    ['18/10', 445, '#007af7'],
    ['19/10', 711, '#007af7'],
    ['20/10', 487, '#007af7'],
    ['21/10', 685, '#007af7'],
    ['22/10', 944, '#007af7'],
    ['23/10', 924, '#007af7'],
    ['24/10', 449, '#007af7'],
    ['25/10', 487, '#007af7'],
    ['26/10', 685, '#007af7'],
    ['27/10', 944, '#007af7'],
    ['28/10', 924, '#007af7'],
    ['29/10', 449, '#007af7'],
    ['30/10', 711, '#007af7'],
    ['31/10', 711, '#007af7'],
    
  ]);
  
  var opt_consumo_diario = {
          title: 'Consumo diário (m³)',
          titleTextStyle: {
                color: '#f1f1f1',
                fontName: 'Arial',
                fontSize: 22,
                bold: 'false'
          },
          legend: 'none',
          chartArea: {
                backgroundColor: 'none',
                left: 50,
                right: 30,
                width: 1150,
                top: 50,
                bottom: 40
          },
          backgroundColor: {
                fill: 'none',
          },
          dataOpacity: 0.7,
          bar: {groupWidth: "50%"},
          vAxis: {
                textStyle: {
                  color: '#f1f1f1'
                },  
          },
          hAxis: {
                textStyle: {
                  color: '#f1f1f1',
                },
                gridlines: {
                    color: '#f1f1f1'
                },
                
          },      
  };
  
  var grafico = new google.visualization.BarChart(document.getElementById('grafico_consumo_diario_google'));
  grafico.draw(dados, opt_consumo_diario);
  }