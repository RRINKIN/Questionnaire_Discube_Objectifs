
//Graphique pour affichage des résultats
const labels = [
    'Préparation',
    'Communication',
    'Suivi',
];
const data = {
    labels: labels,
    datasets: [
        {
        axis: 'y',
        label: 'Résumé de votre maturité "gestion des objectifs"',
        data: [],
        fill: false,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        ],
        borderWidth: 1
    },
    /*{
        axis: 'y',
        label: 'Potentiel maximum atteignable',
        data: [100, 100, 100, 100, 100, 100],
        fill: false,
        backgroundColor: [
            'rgb(220,220,220, 0.2)',
            'rgb(220,220,220, 0.2)',
            'rgb(220,220,220, 0.2)',
            'rgb(220,220,220, 0.2)',
            'rgb(220,220,220, 0.2)',
            'rgb(220,220,220, 0.2)',
        ],
        borderColor: [
            'rgb(169,169,169)',
            'rgb(169,169,169)',
            'rgb(169,169,169)',
            'rgb(169,169,169)',
            'rgb(169,169,169)',
            'rgb(169,169,169)',
        ],
        borderWidth: 1
    }*/
],
};
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }    
};