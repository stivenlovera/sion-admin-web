import { Grid } from '@mui/material'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import Filtros from './components/filtros';
import { DataTableRed } from './components/data-table-red';
import { useEffect, useState } from 'react';
import { DataTableRedService, PreviewPDF } from '../../services/api-guardian/red-servicio';
import { IDataTableRed } from '../../interfaces/IDataTableRed';
import dayjs, { Dayjs } from 'dayjs';
import GenerarDocument from './components/export-doc';
/* import ModalRedReporte, { ModalData } from './components/modal-red-reporte'; */
import sortArray from 'sort-array';
import { Sorting } from '@devexpress/dx-react-grid';

export interface FiltroIDataTableRedProps {
    fechaInicio: string;
    fechaFin: string;
    ciclo: number;
    tipo: string;
    baja: boolean;
    autoventas: boolean;
}
const initialFiltros: FiltroIDataTableRedProps = {
    fechaFin: dayjs().format('YYYY-MM-DD'),
    fechaInicio: dayjs().format('YYYY-MM-DD'),
    ciclo: 0,
    tipo: '',
    baja: false,
    autoventas: false,
}
const Index = () => {
    const [dataModal, setDataModal] = useState<any>({
        tipo: '',
        rows: [],
        filtro: initialFiltros,
        PDF: ''
    });
    const [openModalReporte, setModalReporte] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filtro, setFiltro] = useState<FiltroIDataTableRedProps>(initialFiltros);
    const [dataTable, setdataTable] = useState<IDataTableRed[]>([])
    const [selection, setSelection] = useState<(number | string)[]>([]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'snombrecompleto', direction: 'asc' }]);

    const [PDF, setPDF] = useState('');
    const inizialize = async () => {
        setLoading(true)
        const { data, status } = await DataTableRedService(filtro.fechaInicio, filtro.fechaFin, filtro.ciclo, filtro.tipo, filtro.baja, filtro.autoventas);
        if (data.status == 1) {
            setdataTable(data.data);
        }
        setLoading(false)
    }
    const handlerReportAll = async () => {
        //filtro entre a datatable mediante selecion
        let salida = dataTable.filter((_, index) => selection.includes(index));
        //sort force
        const sort = sortArray(salida, { by: sorting[0].columnName, order: sorting[0].direction })
        setDataModal({
            rows: sort,
            tipo: 'all',
            filtro,
            PDF: PDF
        });
        setModalReporte(true)
        const { data, status } = await PreviewPDF(filtro, sort);
        const file = new Blob([data], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        setPDF(fileURL)
    }
    const handlerReportByPersona = async (data: IDataTableRed) => {
        //filtro entre a datatable mediante selecion
        setDataModal({
            rows: [data],
            tipo: 'persona',
            filtro,
            PDF: PDF
        });
        setModalReporte(true)
    }
    const handlerFiltro = async (values: FiltroIDataTableRedProps) => {
        setFiltro(values);
    }
    useEffect(() => {
        inizialize()
    }, [filtro])

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                <Cbreadcrumbs icon={<AccountTreeIcon />} nombreRoute='Red' nombresRoutes={[]} route='#' routes={[]} />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <Filtros
                    onBuscar={handlerFiltro}
                    disabled={loading}
                />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <GenerarDocument
                    onReportAll={handlerReportAll}
                    disabled={false}
                />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <DataTableRed
                    loading={loading}
                    hidden={false}
                    rows={dataTable}
                    sorting={sorting}
                    onSorting={setSorting}
                    onSelecion={setSelection}
                    selection={selection}
                    onModalReport={handlerReportByPersona}
                />
            </Grid>
           {/*  <ModalRedReporte
                data={dataModal}
                onClose={() => { setModalReporte(false) }}
                onSubmit={() => { }}
                open={openModalReporte}
            /> */}
        </Grid>
    )
}

export default Index
