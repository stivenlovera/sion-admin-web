import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs';
import { DataTable } from '../../components/dataTable/datatable';
import PinIcon from '@mui/icons-material/Pin';
import { CurrencyAcciones } from '../../components/dataTable/components/cuztom-column-actions';
import { IDataTableNiveles } from '../../interfaces/IDataTableNiveles';
import { useListNivel } from './hook/useListNiveles';

const IndexNiveles = () => {
    const [dataTable, setdataTable] = useState<IDataTableNiveles[]>([])
    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting
    } = useListNivel();

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                <Cbreadcrumbs icon={<PinIcon />} nombreRoute='Lista niveles' nombresRoutes={[]} route='#' routes={[]} />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <DataTable
                    columns={columns}
                    loading={false}
                    onSorting={setSorting}
                    rows={dataTable}
                    sorting={sorting}
                    tableColumnExtensions={tableColumnExtensions}
                    titulo={'Lista niveles'}
                    onSelecion={setSelection}
                    selection={selection}
                    nuevoBtn={false}
                >
                    <CurrencyAcciones
                        onEditar={(row) => { row as IDataTableNiveles; console.log(row) }}
                        onEliminar={() => { console.log('eliminar') }}
                        column={['stelefonofijo']}
                    />
                </DataTable>
            </Grid>
        </Grid>
    )
}

export default IndexNiveles
