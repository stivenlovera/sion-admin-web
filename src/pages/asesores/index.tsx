import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/dataTable/datatable'
import { Grid } from '@mui/material';
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { UseListaAsesor } from './hooks/useListaAsesor';
import { initialDataTableAsesor } from './utils/initialStates';
import { IDataTableAsesor } from '../../interfaces/IDataTableAsesor';
import { CurrencyAcciones } from '../../components/dataTable/components/cuztom-column-actions';
const Index = () => {

    const [dataTable, setdataTable] = useState<IDataTableAsesor[]>(initialDataTableAsesor)

    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting
    } = UseListaAsesor();

    useEffect(() => {
        console.log('row', dataTable)
    }, [])

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                <Cbreadcrumbs icon={<AssignmentIndIcon />} nombreRoute='Lista asesores' nombresRoutes={[]} route='#' routes={[]} />
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
                        onEditar={(row) => { row as IDataTableAsesor; console.log(row)}}
                        onEliminar={() => { console.log('eliminar')}}
                        column={['stelefonofijo']}
                    />
                </DataTable>
            </Grid>
        </Grid>
    )
}

export default Index
