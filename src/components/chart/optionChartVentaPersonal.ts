interface IDataChartLineal {
    graficoLineal: string[][];
    titulo: string;
    tituloX: string;
    tituloY: string;
}
export const optionChartLinealVentaPersonal = ({ graficoLineal, titulo, tituloX, tituloY }: IDataChartLineal) => {
    return {
        responsive: false,
        scale: true,
        scaleSize: 20,
        grid: [{ top: '20%' }],
        title: {
            text: titulo,
            textStyle: {
                //color: '#00000',
                fontSize: 14,
                fontFamily: 'Arial',
            },

        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
            formatter: (params: any) => {
                //console.log(params[0], params[1], params[2], params[3])
                return `
                    <strong>Fecha </strong> ${params[0].value[3]} <br />
                    <strong>Cant. ventas </strong> ${params[0].value[2]}<br />
                    <strong>Total ventas </strong> ${params[0].value[1]} $US<br />
                            `;
            },
        },
        xAxis: {
            name: tituloX,
            type: 'category',
            nameLocation: 'middle',
            //nameLocation: 'end',
            //data:['1','2'],
            nameTextStyle: {
                align: 'center',
                verticalAlign: 'top',
                fontSize: 12,
                color: '#000000',
                padding: 20,
            }
        },
        yAxis: {
            name: tituloY,
            axisLabel: {
                distance: -30,
                fontSize: 12,
                formatter: function (value: any) {
                    return `${value}`;
                }
            },
            nameLocation: 'end',
            //data:['1','2'],
            nameGap: 0,
            nameTextStyle: {
                align: 'right',
                verticalAlign: 'top',
                fontSize: 12,
                color: '#000000',
                padding: [-40, 0, 0, 0],
            }
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
                showSymbol: false,
                tooltip: {
                    valueFormatter: (value: any, otro: any) => value + ' $US'
                },
                encode: {
                    x: 'Dia',
                    y: 'Cantidad',
                    itemName: 'Dia',
                    tooltip: ['Precio Total']
                }
            },
        ]
    };
};