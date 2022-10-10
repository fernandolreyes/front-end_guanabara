let elemento2 = document.getElementById('grafico_consumo_mensal');
    let opt2 = {
        chart: {
            type: 'bar',
            width: '100%',
            height: 450,
            foreColor: '#f1f1f1',
            toolbar: {
                tools: {
                  download: false,
                },
              },
        },
        series: [
            {
                name: 'Consumo Mensal',
                data: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        plotOptions: {
            bar: {
                borderRadius: 10,
                horizontal: true,
                dataLabels: {
                    position: 'top'
                }
            }
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
    let chart2 = new ApexCharts (elemento2, opt2);
    chart2.render();