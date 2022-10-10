let elemento = document.getElementById('consumo_acumulado_anual');
    let options = {
        chart: {
            width: "100%",
            height: 600,
            type: "bar",
            foreColor: '#f1f1f1',
            toolbar: {
                tools: {
                  download: false,
                },
              },
        },
        series: [
            {
                name: 'Consumo Acumulado Anual',
                data: [200, 440, 562, 176, 430, 123, 321, 456, 654, 789, 987, 555, 654]
            }
        ],
        labels: ['Brito', 'Cassino', 'CD Pelotas', 'Dom. de Almeida', 
        'Dom Pedro II', 'Escritório Central', 'Fábrica', 'Hiper', 'Osório', 
        'São Lourenço', 'Shopping', 'Teixeira Júnior', 'Trevo'],
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: false,
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
    responsive: [
        {
          breakpoint: 900,
          options: {
            plotOptions: {
              bar: {
                horizontal: false,
                width: 200,
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    
    let chart = new ApexCharts (elemento, options);
    chart.render();