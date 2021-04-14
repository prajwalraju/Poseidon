/*global $, document*/
$(document).ready(function () {

    'use strict';
    var out_arrAmount = []

    // const data = await fetch("variables.json")
    //     .then(Response => Response.json())
    //     .then(data => {

    //         var arrAmount = data.arrAmount
    //         arrAmount = Object.keys(arrAmount)
    //         console.log(arrAmount)
    //         arrAmount.forEach(function (value, index) {
    //             out_arrAmount.push(value)
    //             console.log(out_arrAmount)
    //         })
    //         export default arrAmount
    //     })

    Chart.defaults.global.defaultFontColor = '#75787c';

    // ------------------------------------------------------- //
    // Line Chart Custom 1
    // ------------------------------------------------------ //
    var LINECHARTEXMPLE = $('#lineChartCustom1');
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        options: {
            legend: { labels: { fontColor: "#777", fontSize: 12 } },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 1000,
                        min: 0
                    },
                    display: true,
                    gridLines: {
                        color: 'transparent'
                    }
                }]
            },
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "size of particles",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(134, 77, 217, 0.88)",
                    borderColor: "rgba(134, 77, 217, 088)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: JSON.parse(sessionStorage.getItem("Number")),
                    spanGaps: false
                }
            ]
        }
    });

    // ------------------------------------------------------- //
    // Line Chart Custom 2
    // ------------------------------------------------------ //
    var LINECHARTEXMPLE = $('#lineChartCustom2');
    var lineChartExample = new Chart(LINECHARTEXMPLE, {
        type: 'line',
        options: {
            legend: { labels: { fontColor: "#777", fontSize: 12 } },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        color: 'transparent'
                    }
                }],
                yAxes: [{
                    ticks: {
                        max: 1000,
                        min: 0
                    },
                    display: true,
                    gridLines: {
                        color: 'transparent'
                    }
                }]
            },
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Number of particles",
                    fill: true,
                    lineTension: 0,
                    backgroundColor: "rgba(219, 101, 116, 1)",
                    borderColor: "rgba(134, 77, 217, 088)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 1,
                    pointBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderColor: "rgba(134, 77, 217, 0.88)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: JSON.parse(sessionStorage.getItem("Size")),
                    spanGaps: false
                }
            ]
        }
    });
});
