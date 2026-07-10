
const getCSSVariable = (variableName) => {
    return getComputedStyle(document.body).getPropertyValue(variableName).trim();
};

const ctx1 = document.getElementById('graficoDoughnut1').getContext('2d');

const graficoDoughnut1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 75],
            backgroundColor: [
                getCSSVariable('--circle-box-one'),
                getCSSVariable('--background-main-content'),
            ],
            cutout: '80%'
        }]
    },
});


const ctx2 = document.getElementById('graficoDoughnut2').getContext('2d');

const graficoDoughnut2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [75, 25],
            backgroundColor: [
                getCSSVariable('--circle-box-two'),
                getCSSVariable('--background-main-content'),
            ],
            cutout: '80%'
        }]
    },
});


const ctx3 = document.getElementById('graficoDoughnut3').getContext('2d');

const graficoDoughnut3 = new Chart(ctx3, {
    type: 'doughnut',
    data: { 
        datasets: [{
            data: [50, 50],
            backgroundColor: [
                getCSSVariable('--circle-box-three'),
                getCSSVariable('--background-main-content'),
            ],
            cutout: '80%'
        }]
    },
});


const ctx4 = document.getElementById('graficoSubscription').getContext('2d');

const graficoSubscription = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'],
        datasets: [{
            data: [70, 25, 50, 40, 45, 58,70], 
            backgroundColor: [
                getCSSVariable('--chart-subscription-pink'),
                getCSSVariable('--chart-subscription-purple'),
                getCSSVariable('--chart-subscription-blue'),
                getCSSVariable('--chart-subscription-pink'),
                getCSSVariable('--chart-subscription-purple'),
                getCSSVariable('--chart-subscription-blue'),
                getCSSVariable('--chart-subscription-pink'),
            ],
            
            borderRadius: {
                topLeft: 18,
                topRight: 18,
            },
            
            barPercentage: 0.8
        }],
    },
    options: {
        
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
        },
        scales: {
        
            x: {
                display: false,
                grid: {
                    display: false 
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    }}
});


const ctx5 = document.getElementById('graficoSubscription1').getContext('2d');

const graficoSubscription1 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'],
        datasets: [{
            data: [70, 25, 50, 40, 45, 58,70], 
            backgroundColor: [
                getCSSVariable('--chart-subscription-pink'),
                getCSSVariable('--chart-subscription-purple'),
                getCSSVariable('--chart-subscription-blue'),
                getCSSVariable('--chart-subscription-pink'),
                getCSSVariable('--chart-subscription-purple'),
                getCSSVariable('--chart-subscription-blue'),
                getCSSVariable('--chart-subscription-pink'),
            ],
            
            borderRadius: {
                topLeft: 18,
                topRight: 18,
            },
            
            barPercentage: 0.8
        }],
    },
    options: {
        
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
        },
        scales: {
        
            x: {
                display: false,
                grid: {
                    display: false 
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    }}
});



const ctx6 = document.getElementById('graficoEarnings').getContext('2d');

const graficoEarnings = new Chart(ctx6, {
    type: 'line',
    data: {
        labels: ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'],
        datasets: [{
            label: 'Earnings',
            data: [0, 300, 50, 50, 350, 0],
            
            borderColor: getCSSVariable('--chart-earnings-pink-border'), 
            borderWidth: 4,             
            tension: 0.4,            
            
            fill: true,
            
            
            backgroundColor: getCSSVariable('--chart-earnings-pink'), 
            
            pointRadius: 0,   
        },

        {
            label: 'Earnings',
            data: [10, 10, 500, 200, 10, 400, 0],
            
            borderColor: getCSSVariable('--chart-earnings-purple-border'),           
            tension: 0.4,               
            
            fill: true,                 
            
            backgroundColor: getCSSVariable('--chart-earnings-purple'), 
            
            pointRadius: 0,           
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false
        },
        scales: {
            x: { grid: { display: false } },
            y: { display: false, grid: { display: false } }
        }
    }
});