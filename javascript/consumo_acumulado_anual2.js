let elemento6 = document.getElementById('consumo_acumulado_anual2');
    let options6 = {
        chart: {
            width: 900,
            heigth: 250,
            foreColor: '#f1f1f1',
            background: '#262d47',
            type: 'bar',
            
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
                
                columnWidth: '50%',
                borderRadius: 20,
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
        xaxis:{
            tickPlacement: 'between'
        },
        grid :{
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
    };
    let chart6 = new ApexCharts (elemento6, options6);
    chart6.render();