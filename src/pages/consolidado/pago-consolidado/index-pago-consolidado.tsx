import { Grid } from '@mui/material'
import LoaderPage from '../../../components/loader-page/loader-page'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BtnConsolidadoPagado from './components/btn-consolidado-pagado';
import ModalConsolidadoPagado from './components/modal-comisiones-pagado';
import { useState } from 'react';
import { DataTable } from '../../../components/dataTable/datatable';
import { CurrencyFormatDecimal } from '../../../components/dataTable/components/custom-column-fecha';
import { usePagoConsolidado } from './hooks/usePagoConsolidad';
import { IPagoComisionEstadoReporte, initialPagoComisionEstadoReporte } from "../../../interfaces/IPagoConsolidado";
import { useDataTableHistoryPagoConsolidad } from './hooks/useDataTableHistoryPagoConsolidad';
import { DataTableToRows } from '../../../utils/DataTableToRows';
import ModalPreviewReporte from '../../Red/components/modal-red-reporte';

const IndexPagoConsolidado = () => {
  const [openModalConsolidadoPagado, setOpenModalConsolidadoPagado] = useState(false);
  const [pagoComisionEstadoReporte, setPagoComisionEstadoReporte] = useState<IPagoComisionEstadoReporte>(initialPagoComisionEstadoReporte)
  const [loadPage, setLoadPage] = useState(false);
  const [urlPdf, setUrlPdf] = useState('')
  const [modalPreview, setModalPreview] = useState(false);

  const {
    tableColumnExtensions,
    columns,
    selection,
    setSelection,
    sorting,
    setSorting
  } = useDataTableHistoryPagoConsolidad();

  const {
    dataTableHistorialPagoConsolidado,
    onListHistorialPagoConsolidados,
    onExportConsolidadoEmpresaEXCEL,
    onExportConsolidadoEmpresaPreviewPDF,
    onExportConsolidadoEmpresaPDF
  } = usePagoConsolidado();

  const handlerLoadHistorial = (row: IPagoComisionEstadoReporte) => {
    setPagoComisionEstadoReporte(row);
    setOpenModalConsolidadoPagado(false);
    onListHistorialPagoConsolidados(row.pagoConsolidadoId, setLoadPage);
  }

  const ExportExcel = () => {
    const data = DataTableToRows(dataTableHistorialPagoConsolidado, selection, sorting);
    const nombre_file = `Reporte pago consolidado ${pagoComisionEstadoReporte.nombre}`;
    onExportConsolidadoEmpresaEXCEL(pagoComisionEstadoReporte, data, nombre_file);
  }

  const ExportPdf = () => {
    const data = DataTableToRows(dataTableHistorialPagoConsolidado, selection, sorting);
    const nombre_file = `Reporte consolidado ${pagoComisionEstadoReporte.nombre}`;
    onExportConsolidadoEmpresaPDF(pagoComisionEstadoReporte, data, nombre_file);
  }
  const ExportPreviewPdf = async () => {
    const data = DataTableToRows(dataTableHistorialPagoConsolidado, selection, sorting);
    const nombre_file = `Reporte consolidado ${pagoComisionEstadoReporte.nombre}`;

    const url = await onExportConsolidadoEmpresaPreviewPDF(pagoComisionEstadoReporte, data, nombre_file);
    setModalPreview(true);
    setUrlPdf(url);
  }
  return (
    <Grid container spacing={2}>
      <LoaderPage
        load={loadPage}
      />
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Cbreadcrumbs icon={<RequestQuoteIcon />} nombreRoute='Pago consolidados' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
        <BtnConsolidadoPagado
          onclick={() => { setOpenModalConsolidadoPagado(true) }}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTable
          columns={columns}
          loading={false}
          onSorting={setSorting}
          rows={dataTableHistorialPagoConsolidado}
          sorting={sorting}
          tableColumnExtensions={tableColumnExtensions}
          titulo={pagoComisionEstadoReporte.pagoConsolidadoId == 0 ? 'Lista vacia' : pagoComisionEstadoReporte.nombre}
          onSelecion={setSelection}
          selection={selection}
          enableSelecion={true}
          exportExcelBtn={true}
          onExportExcel={ExportExcel}
          exportPdfBtn={true}
          onExportPdf={ExportPdf}
          exportPreviewPdfBtn={true}
          onExportPreviewPdf={ExportPreviewPdf}
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
      <ModalConsolidadoPagado
        data={{}}
        onClose={() => { setOpenModalConsolidadoPagado(false) }}
        onSubmit={handlerLoadHistorial}
        open={openModalConsolidadoPagado}
      />
      <ModalPreviewReporte
        url={urlPdf}
        onClose={() => { setModalPreview(false) }}
        open={modalPreview}
      />
    </Grid>
  )

}

export default IndexPagoConsolidado
