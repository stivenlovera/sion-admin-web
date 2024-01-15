import { DataTypeProvider, IntegratedFiltering, IntegratedPaging, IntegratedSorting, PagingState, SearchState, Sorting, SortingState } from '@devexpress/dx-react-grid';
import { Grid, PagingPanel, SearchPanel, Table, TableFixedColumns, TableHeaderRow, Toolbar, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { Paper, CardContent, Typography, IconButton, Button, Divider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Column } from '@devexpress/dx-react-grid';
import { Loading } from '../../../../components/Loading/Loading';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../../../components/styles/styles.css';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import ModalFuncionario from './modal-funcionario';
import { IFuncionario, initialFuncionario } from '../../../../interfaces/funcionarios';

interface DataTablePros {
    hidden: boolean
}
export const DataTableFuncionarios = ({ hidden }: DataTablePros) => {
    const [rows, setRows] = useState<IFuncionario[]>([]);
    const [loading, setLoading] = useState(false);
    const [tableColumnExtensions] = useState<VirtualTable.ColumnExtension[]>([
        { columnName: 'documento', wordWrapEnabled: true, width: 200 },
        { columnName: 'nombres', wordWrapEnabled: true },
        { columnName: 'apellidos', wordWrapEnabled: true },
        { columnName: 'fechaIngreso', width: 200 },
        { columnName: 'cargo', wordWrapEnabled: true },
        { columnName: 'autorizacionId', wordWrapEnabled: true, width: 50 },
    ]);
    const [columns] = useState<Column[]>([
        { name: 'documento', title: 'Documento' },
        { name: 'nombres', title: 'Nombres' },
        { name: 'apellidos', title: 'Apellidos' },
        { name: 'fechaIngreso', title: 'Fecha ingreso' },
        { name: 'cargo', title: 'Cargo' },
        { name: 'funcionarioId', title: 'Acciones' },
    ]);
    const [sorting, setSorting] = useState<Sorting[]>([{ columnName: 'Num', direction: 'asc' }]);
    const [dateColumnAcciones] = useState(['funcionarioId']);
    const columnAcciones = ({ value, row, column }: DataTypeProvider.ValueFormatterProps) => {
        const data = row as IFuncionario;
        return (
            <>
                <IconButton
                    sx={{ p: 0 }}
                    aria-label="delete"
                    color="primary"
                    onClick={() => { setOpenModalFuncionario(true); setEditar(true) }}
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
    const [openModalFuncionario, setOpenModalFuncionario] = useState(false)
    const [editar, setEditar] = useState(false)
    const [funcionario, setFuncionario] = useState(initialFuncionario)
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
                        Lista usuarios
                    </Typography>
                    <Button
                        color='primary'
                        size='small'
                        variant="contained"
                        startIcon={
                            <AddIcon />
                        }
                        onClick={() => { setOpenModalFuncionario(true) }}
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
           {/*  <ModalFuncionario
                edit={editar}
                onClose={() => { setOpenModalFuncionario(false); setEditar(false) }}
                open={openModalFuncionario}
                data={funcionario}
                onSubmit={() => { }}
            /> */}
        </>
    )
}
