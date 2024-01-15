import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { DataTable } from '../../../components/dataTable/datatable';
import { CurrencyAcciones } from '../../../components/dataTable/components/cuztom-column-actions';
import { UseModulo } from './hooks/useModulos';
import { fakeModulos } from '../utils/initial-sistema';
import { IDataTableModulo } from '../../../interfaces/IDataTableModulo';

const Index = () => {
    const [dataTable, setdataTable] = useState<IDataTableModulo[]>(fakeModulos)
    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting
    } = UseModulo();

    useEffect(() => {

    }, [])

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Cbreadcrumbs icon={<ViewModuleIcon />} nombreRoute='Lista modulos' nombresRoutes={[]} route='#' routes={[]} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <DataTable
                    columns={columns}
                    loading={false}
                    onSorting={setSorting}
                    rows={dataTable}
                    sorting={sorting}
                    tableColumnExtensions={tableColumnExtensions}
                    titulo={'Lista modulos'}
                    onSelecion={setSelection}
                    selection={selection}
                    nuevoBtn={true}
                >
                    <CurrencyAcciones
                        onEditar={(row) => { row as IDataTableModulo; console.log(row) }}
                        onEliminar={() => { console.log('eliminar') }}
                        column={['modulo_id']}
                    />
                </DataTable>
            </Grid>
            <Grid item  xl={6} lg={6} md={6} sm={12} xs={12}>

            </Grid>
        </Grid>
    )
}

export default Index
