import { DataTypeProvider, IntegratedFiltering, IntegratedPaging, IntegratedSorting, PagingState, SearchState, Sorting, SortingState } from '@devexpress/dx-react-grid';
import { Grid, PagingPanel, SearchPanel, Table, TableFixedColumns, TableHeaderRow, Toolbar, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { Paper, CardContent, Typography, IconButton, Button, Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Column } from '@devexpress/dx-react-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../../components/styles/styles.css';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { initialRol, initialRolLista, IRol, IRolLista } from '../../../../interfaces/roles';
import { Loading } from '../../../../components/Loading/Loading';
import ModalRoles from './modal-roles';

interface DataTablePros {
    hidden: boolean
}
export const DataTableRoles = ({ hidden }: DataTablePros) => {
    const [rows, setRows] = useState<IRolLista[]>([
        {
            modulos: '',
            nombreRol: '',
            rolId: 0
        },
    ]);
    const [loading, setLoading] = useState(false);
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'modulos', wordWrapEnabled: true, width: 200 },
        { columnName: 'nombreRol', wordWrapEnabled: true },
        { columnName: 'rolId', wordWrapEnabled: true, width: 200 },

    ]);
    const [columns] = useState<Column[]>([
        { name: 'modulos', title: 'Modulo' },
        { name: 'nombreRol', title: 'Nombre' },
        { name: 'rolId', title: 'Acciones' }
    ]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'nombreRol', direction: 'asc' }]);
    const [dateColumnAcciones] = useState(['rolId']);
    const columnAcciones = ({ value, row, column }: DataTypeProvider.ValueFormatterProps) => {
        const data = row as IRolLista;
        return (
            <>
                <IconButton
                    sx={{ p: 0 }}
                    aria-label="delete"
                    color="primary"
                    onClick={() => { setOpenModalAutorizacion(true); setEditar(true) }}
                >
                    <EditIcon
                        color='success'
                    />
                </IconButton>
                <IconButton
                    sx={{ p: 0 }}
                    aria-label="delete"
                    onClick={() => { }}
                >
                    <DeleteIcon
                        color='error'
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
    const loadDataGrid = async () => {
        /* setLoading(true); */
    };

    /*Metodos*/
    const [openModalAutorizacion, setOpenModalAutorizacion] = useState(false)
    const [editar, setEditar] = useState(false)
    const [rol, setRol] = useState(initialRol)
    useEffect(() => {
        loadDataGrid();
    }, []);
    
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
                        Lista roles
                    </Typography>
                    <Button
                        color='primary'
                        size='small'
                        variant="contained"
                        startIcon={
                            <AddIcon />
                        }
                        onClick={() => { setOpenModalAutorizacion(true) }}
                    >
                        Añadir
                    </Button >
                </Box>
                <Divider />
                <Grid
                    rows={rows}
                    columns={columns}
                >
                    <SearchState />
                    <Toolbar />
                    <SearchPanel messages={{ searchPlaceholder: 'Buscar' }} />
                    <IntegratedFiltering />
                    <CurrencyAcciones
                        for={dateColumnAcciones}
                    />
                    <PagingState
                        defaultCurrentPage={5}
                        pageSize={10}
                    />
                    <PagingPanel messages={{ info: ({ count, from, to }) => `${from} - ${to} de ${count}` }} />
                    <IntegratedPaging />
                    <Table messages={{
                        noData: 'No hay registros',
                    }} />
                    <VirtualTable columnExtensions={tableColumnExtensions} />
                    <SortingState
                        sorting={sorting}
                        onSortingChange={setSorting}
                    />
                    <IntegratedSorting />
                    <TableHeaderRow showSortingControls titleComponent={(props) => {
                        return (<TableHeaderRow.Title {...props} className='titulos' />);
                    }} />
                </Grid>
                {loading && <Loading />}
            </Paper >
             <ModalRoles
                edit={editar}
                onClose={() => { setOpenModalAutorizacion(false); setEditar(false) }}
                open={openModalAutorizacion}
                data={rol}
                onSubmit={() => { }}
            />
        </>
    )
}
