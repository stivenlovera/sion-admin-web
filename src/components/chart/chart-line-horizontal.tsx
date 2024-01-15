import ReactEcharts from "echarts-for-react";
// register theme object

export interface ChartLineHorizontalProps {
    titulo: string;
    tituloX: string;
    tituloY: string;
    data: string[][];
    showLoading: boolean
    option: any
}

export const ChartLineHorizontal = ({ titulo, tituloX, tituloY, data, showLoading, option }: ChartLineHorizontalProps) => {
    return (
        <ReactEcharts
            option={option}
            className='echarts-for-echarts'
            style={{ height: '490px', width: '100%' }}
            opts={{ renderer: 'svg' }}
            showLoading={showLoading}
            loadingOption={{ text: 'Cargando', fontSize: 18, }}
            /* onEvents={onEvents} */
        />);
}