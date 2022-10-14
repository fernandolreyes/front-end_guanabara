google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(indice_eficiencia);

function indice_eficiencia() {

  var dados = google.visualization.arrayToDataTable([
    ['lojas', 'indice de eficiência m³/m²', {role: 'style'}],
    ['Brito', 7111, '#007af7'],
    ['Cassino', 4877, '#007af7'],
    ['CD Pelotas', 6855, '#007af7'],
    ['Dom. de Almeida', 9444, '#007af7'],
    ['Dom Pedro II', 9244, '#007af7'],
    ['Escritório Central', 4459, '#007af7'],
    ['Fábrica', 4150, '#007af7'],
    ['Hiper', 7551, '#007af7'],
    ['Osório', 6514, '#007af7'],
    ['São Lourenço', 3314, '#007af7'],
    ['Shoppinp', 8414, '#007af7'],
    ['Teixeira Júnior', 8814, '#007af7'],
    ['Trevo', 3555, '#007af7']
  ]);
  
  var opt_consumo_anual = {
          title: 'Indice de Eficiência (m³/m²)',
          titleTextStyle: {
                color: '#f1f1f1',
                fontName: 'Arial',
                fontSize: 22,
                bold: 'false'
          },
          legend: 'none',
          chartArea: {
                backgroundColor: 'none',
                left: 70,
                width: 1150,
                right: 30,
                top: 50,
                bottom: 60
          },
          backgroundColor: {
                fill: 'none',
          },
          dataOpacity: 0.7,
          vAxis: {
                gridlines: {
                  color: '#f1f1f1'
                },
                textStyle: {
                  color: '#f1f1f1'
                },  
          },
          hAxis: {
                textStyle: {
                  color: '#f1f1f1',
                },
                
          },      
  };
  
  var grafico = new google.visualization.AreaChart(document.getElementById('indice_de_eficiencia_google'));
  grafico.draw(dados, opt_consumo_anual);
  }