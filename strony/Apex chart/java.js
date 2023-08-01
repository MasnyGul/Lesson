const chartOptions = {
    chart: {
        type:'area',
        height:180,
        toolbar:{show:false},
        zoom:{enable:false}
    },
    colors:['#ccc'],
    series:[{name:'Views',data:[18,50,42,94,41,65]}],
    dataLabels:{enable:false},
    stroke:{width:3,curve:'smooth'},
    fill:{
        type:'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom:0.7,
            opacityTo:0,
            stops:[0,90,100]
        }
    },
    xaxis:{
        categories:['Feb','Apr','Jun','Aug','Oct','Dec'],
        axisBorder:{show:false},
        labels:{style:{colors:'rgba(0,0,0,0.7)',FontFamilty:'Poppins'}}
    },
    yaxis:{show:false},
    grid:{borderColor:'rgba(0,0,0,0)',padding:{ top:-30,bottom:-8,left:12,right:12}},
    tooltip: {
        disable:true,
        y:{formatter: value => `${value}K` },
        style:{ FontFamilty:'Poppins'}
    },
    markers:{show:false}
};

const chart = new ApexCharts(document.querySelector('.chart-area'),chartOptions);
chart.render();