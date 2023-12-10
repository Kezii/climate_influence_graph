var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    title: {
        text: ""
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 50,
            roam: true,
            label: {
                show: true

            },
            force: {
                // initLayout: 'circular'
                // gravity: 0
                repulsion: 5000,
                edgeLength: 100
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 30
            },
            data: graph_data,
            links: graph_links,
            categories: [
                {
                    name: 'Person'
                },
                {
                    name: 'NGO'
                },
                {
                    name: 'Government'
                },
                {
                    name: 'Company'
                },
                {
                    name: 'Political Party'
                }
            ],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);