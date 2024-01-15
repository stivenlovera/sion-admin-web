import React from 'react'
import LoaderPage from '../../../components/loader-page/loader-page'
import { Box, Button, Grid, Paper } from '@mui/material'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { DataTable } from '../../../components/dataTable/datatable';
import { useDataTableProyeccion } from '../components/useDataTableProyeccion';
import { useProyeccion } from '../components/useProyeccion';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ProyecionVenta = () => {

  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting
  } = useDataTableProyeccion();


  const {
    loaderPage,
    dataTable,
    setDataTable,
    listaProyeccion,
    openModalProyeccion,
    setOpenModalProyeccion
  } = useProyeccion();

  return (
    <>
      <LoaderPage
        load={false}
      />
      <Grid container spacing={1}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Cbreadcrumbs icon={<QueryStatsIcon />} nombreRoute='Lista proyecciones venta' nombresRoutes={[]} route='#' routes={[]} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={1}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Paper style={{ position: 'relative' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 0,
                  }}
                >
                </Box>
              </Paper>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Paper style={{ position: 'relative' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 0,
                  }}
                >
                  <Button
                    color='primary'
                    size='small'
                    variant="contained"
                    startIcon={<FileDownloadIcon />}
                    onClick={()=>{}}
                  >
                    Export excel
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <DataTable
                columns={columns}
                loading={false}
                onSorting={setSorting}
                rows={dataTable}
                sorting={sorting}
                tableColumnExtensions={tableColumnExtensions}
                titulo={'Lista Bonificacion'}
                onSelecion={setSelection}
                selection={selection}
                onExportExcel={()=>{}}
                exportExcelBtn={true}
              >
                {/* <CurrencyAccionesFuncionario
                  onAcceso={(row) => { row as IDataTableFuncionario; HanlderAutorizacion(row) }}
                  onEditar={(row) => { row as IDataTableFuncionario; editarFuncionario(row) }}
                  onEliminar={() => { console.log('eliminar') }}
                  column={['funcionarioId']}
                /> */}
              </DataTable>
            </Grid>
          </Grid>
        </Grid>
        {/*  <ModalFuncionario
          open={openModalFuncionario}
          data={funcionario}
          onClose={() => { setOpenModalFuncionario(false) }}
          onSubmit={storeFuncionario}
        />
        <ModalAccesos
          onClose={() => { setOpenModalAutorizado(false); }}
          open={openModalAutorizado}
          data={autorizacion}
          onSubmit={updateAuthorizacion}
        /> */}
      </Grid>
    </>
  )
}

export default ProyecionVenta
