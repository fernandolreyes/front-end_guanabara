google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(consumo_mensal);

function consumo_mensal() {

  var dados = google.visualization.arrayToDataTable([
    ['mês', 'consumo(m³)', {role: 'style'}],
    ['Janeiro', 1711, '#007af7'],
    ['Fevereiro', 2487, '#007af7'],
    ['Março', 2685, '#007af7'],
    ['Abril', 1944, '#007af7'],
    ['Maio', 1924, '#007af7'],
    ['Junho', 2449, '#007af7'],
    ['Julho', 2711, '#007af7'],
    ['Agosto', 1487, '#007af7'],
    ['Setembro', 1685, '#007af7'],
    ['Outubro', 1944, '#007af7'],
    ['Novembro', 2924, '#007af7'],
    ['Dezembro', 2449, '#007af7'],
    
  ]);
  
  var opt_consumo_mensal = {
          title: 'Consumo mensal (m³)',
          titleTextStyle: {
                color: '#f1f1f1',
                fontName: 'Arial',
                fontSize: 22,
                bold: 'false'
          },
          legend: 'none',
          chartArea: {
                backgroundColor: 'none',
                left: 80,
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
  
  var grafico = new google.visualization.BarChart(document.getElementById('grafico_consumo_mensal_google'));
  grafico.draw(dados, opt_consumo_mensal);
  }