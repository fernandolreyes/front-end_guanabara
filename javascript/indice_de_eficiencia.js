let element = document.getElementById('indice_de_eficiencia');
let opt = {
    chart: {
        width: "98%",
        height: 400,
        type: "area",
        foreColor: '#f1f1f1',
        background: 'none',
        toolbar: {
            tools: {
              download: false,
            },
          },
    },
    series: [
        {
            name: 'Índice de Eficiencia',
            data: [200, 440, 562, 176, 430, 123, 321, 456, 654, 789, 987, 555, 654]
        }
    ],
    labels: ['Unidade Hiper', 'Unidade Teixeira Júnior', 'Unidade Brito', 'Unidade Osório', 
    'Unidade Trevo', 'Unidade Shopping', 'Unidade Cassino', 'Escritório Central', 'Unidade Dom. de Almeida', 
    'Unidade Dom Pedro II', 'Unidade São Lourenço', 'CD Pelotas', 'Fábrica'],
    plotOptions: {
    
    },
    yaxis:{
        min: 0,
        max: 1200
    },

    grid :{
        show: true,
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    colors: ['#007af7']
};
let charts = new ApexCharts (element, opt);
charts.render();