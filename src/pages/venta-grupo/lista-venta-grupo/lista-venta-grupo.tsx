import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoaderPage from '../../../components/loader-page/loader-page'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { CurrencyFormatDecimal } from '../../../components/dataTable/components/custom-column-fecha';
import { DataTable } from '../../../components/dataTable/datatable';
import { useDataTableAdministracionVentaGrupo } from './hook/useDataTableVentaGrupo';

const ListaVentaGrupo = () => {

  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting,
  } = useDataTableAdministracionVentaGrupo();

  const [loadPage, setloadPage] = useState(false)
  return (
    <Grid container spacing={2}>
      <LoaderPage
        load={loadPage}
      />
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Cbreadcrumbs icon={<Diversity3Icon />} nombreRoute='Venta grupo' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Paper style={{ position: 'relative' }}>
          <Typography
            sx={{ p: 1, flexGrow: 1 }} variant="subtitle1" style={{ fontWeight: 'bold' }}>
            Seleccione Consolidado
          </Typography>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 2,
              m: 0,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>

              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>

              </Grid>
            </Grid>
          </Box>
        </Paper >
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTable
          columns={columns}
          loading={false}
          onSorting={setSorting}
          rows={[]}
          sorting={sorting}
          tableColumnExtensions={tableColumnExtensions}
          titulo={'Ventas en grupo realizadas'}
          onSelecion={setSelection}
          selection={selection}
          enableSelecion={true}
          exportExcelBtn={false}
          onExportExcel={() => { }}
          exportPdfBtn={false}
          onExportPdf={() => { }}
          exportPreviewPdfBtn={false}
          onExportPreviewPdf={() => { }}
        >
          <CurrencyFormatDecimal
            column={['totalComisionVtaPersonal']}
          />
          <CurrencyFormatDecimal
            column={['totalComisionVtaGrupoResidual']}
          />
          <CurrencyFormatDecimal
            column={['valor13']}
          />
          <CurrencyFormatDecimal
            column={['valor87']}
          />
          <CurrencyFormatDecimal
            column={['totalComisionRetencion']}
          />
          <CurrencyFormatDecimal
            column={['totalComision']}
          />
          <CurrencyFormatDecimal
            column={['totalPagar']}
          />
        </DataTable>
      </Grid>
    </Grid>
  )
}

export default ListaVentaGrupo
