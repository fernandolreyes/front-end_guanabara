let elemento1 = document.getElementById('grafico_consumo_diario');
    let opt1 = {
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
                name: 'Consumo Diário',
                data: [500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0]
            }
        ],
        labels: ['01/09', '02/09', '03/09', '04/09', '05/09', '06/09', '07/09', '08/09', '09/09', '10/09', '11/09', 
        '12/09', '13/09', '14/09', '15/09', '16/09', '17/09', '18/09', '19/09', '20/09', '21/09', '22/09', '23/09', 
        '24/09', '25/09', '26/09', '27/09', '28/09', '20/09', '30/09' ],
        plotOptions: {
            bar: {
                borderRadius: 3,
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
    let chart1 = new ApexCharts (elemento1, opt1);
    chart1.render();