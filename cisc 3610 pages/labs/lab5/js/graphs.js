var g1 = document.getElementById('graph1').getContext('2d');
var g2 = document.getElementById('graph2').getContext('2d');
var data = Info;
var data2 = Info2;

var chart1 = new Chart(g1, {
    type: 'horizontalBar',
    data: {
      labels: [data.arr[0].Year, data.arr[1].Year, data.arr[2].Year, data.arr[3].Year],
      datasets: [
        {
          label: "Estimated Number of Homeless People per Year",
          data: [data.arr[0].HomelessEstimate, data.arr[1].HomelessEstimate, 
          			data.arr[2].HomelessEstimate, data.arr[3].HomelessEstimate],
        	backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            borderColor: "blue",
            borderWidth: 1
        }
      ]
    },
    options: {
        responsive: false,
        title: { display: true,
                text: 'Estimated Number of Homeless People in NYC'
                },   
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var chart2 = new Chart(g2, {
    type: 'doughnut',
    data: {
      labels: [data2.arr2[0].bName, data2.arr2[1].bName, data2.arr2[2].bName,
      			data2.arr2[3].bName, data2.arr2[4].bName],
      datasets: [
        {
          label: "Population",
          data: [data2.arr2[0].Population, data2.arr2[1].Population, data2.arr2[2].Population,
          			data2.arr2[3].Population, data2.arr2[4].Population],
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        borderColor: "blue",
    	borderWidth: 1

        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'NYC Population in 2020'
      }
    }
});

