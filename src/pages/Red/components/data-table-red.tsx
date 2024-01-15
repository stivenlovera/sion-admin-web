import { DataTypeProvider, IntegratedFiltering, IntegratedPaging, IntegratedSelection, IntegratedSorting, PagingState, SearchState, SelectionState, Sorting, SortingState, VirtualTableState } from '@devexpress/dx-react-grid';
import { ExportPanel, Grid, PagingPanel, SearchPanel, Table, TableFixedColumns, TableHeaderRow, TableSelection, Toolbar, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { Paper, CardContent, Typography, IconButton, Button, Divider, Chip } from '@mui/material';
import { Fragment, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Column } from '@devexpress/dx-react-grid';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box } from '@mui/system';
import { IDataTableRed, initialDataTableRed } from '../../../interfaces/IDataTableRed';
import { Loading } from '../../../components/Loading/Loading';
import { CustomTreeData } from '@devexpress/dx-react-grid';
import { Template, TemplateConnector, TemplatePlaceholder } from '@devexpress/dx-react-core';

interface DataTablePros {
    hidden: boolean;
    rows: IDataTableRed[];
    loading: boolean;
    onSelecion: (values: (number | string)[]) => void;
    selection: (number | string)[],
    onModalReport: (data: IDataTableRed) => void;
    sorting: Sorting[];
    onSorting: (sort: Sorting[]) => void;
}
export const DataTableRed = ({ hidden, rows, loading, onSelecion, selection, onModalReport, sorting, onSorting }: DataTablePros) => {
    const [pageSizes] = useState([5, 10, 15, 0]);
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'lcontacto_id', wordWrapEnabled: true, align: 'left' },
        { columnName: 'scedulaidentidad', wordWrapEnabled: true, align: 'left' },
        { columnName: 'snombrecompleto', wordWrapEnabled: true, align: 'left', width: 300, },
        { columnName: 'cantidad', wordWrapEnabled: true, align: 'left' },
        { columnName: 'lgeneracion', wordWrapEnabled: true, align: 'left' },
        { columnName: 'lciclo_id', wordWrapEnabled: true, align: 'left' },
        { columnName: 'total_vendido', wordWrapEnabled: true, align: 'left' },
        { columnName: 'cbaja', wordWrapEnabled: true, align: 'left' }
    ]);
    const [columns] = useState<Column[]>([
        { name: 'lcontacto_id', title: 'Id' },
        { name: 'scedulaidentidad', title: 'CI' },
        { name: 'snombrecompleto', title: 'Nombre Completo' },
        { name: 'cantidad', title: 'Cantidad Ventas' },
        { name: 'lciclo_id', title: 'Ciclo' },
        { name: 'cbaja', title: 'Estado' },
        { name: 'total_vendido', title: 'Monto Ventas $US' },
        { name: 'lcontrato_id', title: 'Acciones' }
    ]);

    const columnActivo = ({ value, row, column }: DataTypeProvider.ValueFormatterProps) => {
        const data = row as IDataTableRed;
        return (
            data.cbaja == '1' ? (<>
                <Chip color='error' disabled label="Dado de baja" />
            </>) : (<>
                <Chip color='success' label="Habilitado" />
            </>)
        )
    };
    const handlerSelecion = (values: (number | string)[]) => {
        onSelecion(values);
    }
    const columnAcciones = ({ value, row, column }: DataTypeProvider.ValueFormatterProps) => {
        const data = row as IDataTableRed;
        return (
            <>
                <IconButton
                    sx={{ p: 0 }}
                    color="primary"
                    onClick={() => { console.log(sorting); onModalReport(data); }}
                >
                    <PictureAsPdfIcon
                        fontSize={'large'}
                        color='primary'
                    />
                </IconButton>
            </>
        )
    };
    const CurrencyAcciones = (props: any) => (
        <DataTypeProvider
            formatterComponent={columnAcciones}
            {...props}
        />
    );
    const CurrencyActivo = (props: any) => (
        <DataTypeProvider
            formatterComponent={columnActivo}
            {...props}
        />
    );
    const [dateColumnBaja] = useState(['cbaja']);
    const [dateColumnAcciones] = useState(['lcontrato_id']);
    /*Metodos*/

    useEffect(() => {

    }, [rows]);
    //export
    const exporterRef = useRef<any>(null);
    return (
        <>
            <Paper style={{ position: 'relative' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 0,
                    }}
                >
                    <Typography variant="subtitle1">
                        Lista red
                    </Typography>
                </Box>
                <Divider />
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <Typography
                        variant='subtitle2'
                        sx={{ pl: 2 }}
                    >
                        Total filas seleccionada:
                        {' '}
                        {selection.length}
                    </Typography>
                    <SelectionState
                        selection={selection}
                        onSelectionChange={handlerSelecion}
                    />
                    <IntegratedSelection />
                    <VirtualTable onTopRowChange={(rowId) => { console.log(rowId) }} />

                    <SortingState
                        sorting={sorting}
                        onSortingChange={onSorting}
                    />
                    <IntegratedSorting />

                    <SearchState />
                    <IntegratedFiltering />
                    <Toolbar />

                    <PagingState
                        defaultCurrentPage={0}
                        pageSize={10}
                    />
                    <IntegratedPaging />
                    <Table
                        messages={{
                            noData: 'No hay registros',
                        }}
                        columnExtensions={tableColumnExtensions}
                    />
                    <TableHeaderRow showSortingControls titleComponent={(props) => {
                        return (<TableHeaderRow.Title {...props} className='titulos' />);
                    }} />
                    <TableSelection showSelectAll />
                    <PagingPanel
                        messages={{ info: ({ count, from, to }) => `${from} - ${to} de ${count}`, rowsPerPage: 'Fila por pagina:' }}
                    />
                    <SearchPanel messages={{ searchPlaceholder: 'Buscar' }} />
                    <CurrencyAcciones
                        for={dateColumnAcciones}
                    />
                    <CurrencyActivo
                        for={dateColumnBaja}
                    />
                </Grid>
                {loading && <Loading />}
            </Paper>
        </>
    )
}
