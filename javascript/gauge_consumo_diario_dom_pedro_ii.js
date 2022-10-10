let diario9 = document.getElementById('gauge_consumo_diario9');
let option9 = {
    chart: {
      height: 190,
      type: "radialBar",
      foreColor: '#f1f1f1',
    },
    series: [50],
    colors: ["#f1f1f1"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#f1f1f1',
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
            fontSize: '28px',
            color: '#007af7',
            offsetY: 55,
          },
          value: {
            fontSize: "20px",
            show: true,
            formatter: function (val) {
                return val + 'm³'
            },
            color: '#007af7',
            offsetY: 0,
          }
        }
      }
    },
    fill: {
      colors: '#007af7'
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Cons. Diário"],
  };
  
  let charta9 = new ApexCharts(diario9, option9);
  charta9.render();