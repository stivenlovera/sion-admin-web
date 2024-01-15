import { Grid } from '@mui/material'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import WorkIcon from '@mui/icons-material/Work';
import { DataTable } from '../../components/dataTable/datatable';
import { useListComplejo } from './hook/useListComplejo';
import { useState } from 'react';
import { IDataTableAsesor } from '../../interfaces/IDataTableAsesor';
import { IDataTableComplejo } from '../../interfaces/IDataTableComplejo';
import { CurrencyAcciones } from '../../components/dataTable/components/cuztom-column-actions';

const IndexComplejo = () => {
    const [dataTable, setdataTable] = useState<IDataTableComplejo[]>([])
    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting
    } = useListComplejo();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                <Cbreadcrumbs icon={<WorkIcon />} nombreRoute='Lista complejo' nombresRoutes={[]} route='#' routes={[]} />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                 <DataTable
                    columns={columns}
                    loading={false}
                    onSorting={setSorting}
                    rows={dataTable}
                    sorting={sorting}
                    tableColumnExtensions={tableColumnExtensions}
                    titulo={'Lista asesores'}
                    onSelecion={setSelection}
                    selection={selection}
                    nuevoBtn={false}
                >
                    <CurrencyAcciones
                        onEditar={(row) => { row as IDataTableComplejo; console.log(row)}}
                        onEliminar={() => { console.log('eliminar')}}
                        column={['stelefonofijo']}
                    />
                </DataTable>
            </Grid>
        </Grid>
    )
}

export default IndexComplejo
