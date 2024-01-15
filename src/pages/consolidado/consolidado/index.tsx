import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import TaskIcon from '@mui/icons-material/Task';
import LoaderPage from '../../../components/loader-page/loader-page';
import FiltroConsolidadoGenerados from './components/filtro-consolidados-generados';
import CambioEmpresa from '../generar-consolidado/components/cambio-empresa';
import { DataTable } from '../../../components/dataTable/datatable';
import { useDataTableConsolidado } from '../generar-consolidado/hooks/useDataTableConsolidado';
import { CurrencyFormatDecimal } from '../../../components/dataTable/components/custom-column-fecha';
import { useConsolidadoRegistrado } from './hooks/useConsolidadoRegistrado';
import ModalConsolidadoCambioEmpresa from './components/modal-consolidado-cambio-empresa';
import ModalConsolidadoGenerado from './components/modal-consolidados-registrados';
import { IcomisionConsolidado, initialsStateConsolidadoComisiones } from '../../../interfaces/IComisionConsolidado';
import { DataTableToRows } from '../../../utils/DataTableToRows';
import ModalPreviewReporte from '../../Red/components/modal-red-reporte';
import ModalGenerarConsolidado from '../generar-consolidado/components/modal-generar-consolidado';
import { ModalDelete } from '../../../components/modal-delete/modal-delete';

const Index = () => {
  const [modalGenerarConsolidado, setModalGenerarConsolidado] = useState(false);
  const [modalGenerarEditarConsolidado, setModalGenerarEditarConsolidado] = useState(false);
  const [modalConsolidadoCambioEmpresa, setModalConsolidadoCambioEmpresa] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [consolidado, setconsolidado] = useState<IcomisionConsolidado>(initialsStateConsolidadoComisiones);
  const [urlPdf, setUrlPdf] = useState('')
  const [modalPreview, setModalPreview] = useState(false);

  const {
    loaderPage,
    cambioEmpresa,
    onGetOneConsolidadoRegistrado,
    onGetOneConsolidadoCambioEmpresa,
    onStoreConsolidadoCambioEmpresa,
    onExporComisiontConsolidadaPDF,
    onExportComisionConsolidadoEXCEL,
    onExportComisionConsolidadoPreviewPDF,
    historicoComisionConsolidadoDataTable,
    setHistoricoComisionConsolidadoDataTable,
    dataTable
  } = useConsolidadoRegistrado()

  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting,
  } = useDataTableConsolidado();

  const obtenerConsolidado = (comisionConsolidado: IcomisionConsolidado) => {
    onGetOneConsolidadoRegistrado(comisionConsolidado.comisionConsolidadoId);
    setconsolidado(comisionConsolidado)
    setModalGenerarConsolidado(false);
  }
  const ExportExcel = () => {
    const data = DataTableToRows(historicoComisionConsolidadoDataTable, selection, sorting);
    const nombre_file = `Reporte ${consolidado.nombre}`;
    onExportComisionConsolidadoEXCEL(consolidado, data, nombre_file);
  }

  const ExportPdf = () => {
    const data = DataTableToRows(historicoComisionConsolidadoDataTable, selection, sorting);
    const nombre_file = `Reporte ${consolidado.nombre}`;
    onExporComisiontConsolidadaPDF(consolidado, historicoComisionConsolidadoDataTable, nombre_file);
  }

  const ExportPreviewPdf = async () => {
    const data = DataTableToRows(historicoComisionConsolidadoDataTable, selection, sorting);
    const nombre_file = `Reporte - ${consolidado.nombre}`;
    const url = await onExportComisionConsolidadoPreviewPDF(consolidado, data, nombre_file);
    setModalPreview(true);
    setUrlPdf(url);
  }

  const ProcesarSalida = () => {
    const data = DataTableToRows(historicoComisionConsolidadoDataTable, selection, sorting);
    cambioEmpresa.dataTable = data;
    cambioEmpresa.pagoConsolidado.comisionConsolidadoId = consolidado.comisionConsolidadoId;
    return cambioEmpresa
  }

  const limpiar = () => {
    setHistoricoComisionConsolidadoDataTable([]);
    setSelection([])
    setconsolidado(initialsStateConsolidadoComisiones);
  }

  return (
    <Grid container spacing={2}>
      <LoaderPage
        load={loaderPage}
      />
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Cbreadcrumbs icon={<TaskIcon />} nombreRoute='Consolidados' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
        <FiltroConsolidadoGenerados
          onclick={() => { setModalGenerarConsolidado(true) }}
          reset={limpiar}
        />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
        <CambioEmpresa
          comisionConsolidadoId={consolidado.comisionConsolidadoId}
          onEnviar={(value) => {
            setModalConsolidadoCambioEmpresa(true);
            onGetOneConsolidadoCambioEmpresa(consolidado.comisionConsolidadoId);
          }}
        />
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <DataTable
          columns={columns}
          loading={false}
          onSorting={setSorting}
          rows={historicoComisionConsolidadoDataTable}
          sorting={sorting}
          tableColumnExtensions={tableColumnExtensions}
          titulo={consolidado.nombre.toLocaleUpperCase() == '' ? 'No hay datos para visualizar' : consolidado.nombre.toLocaleUpperCase()}
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
      <ModalConsolidadoGenerado
        data={{}}
        onClose={() => { setModalGenerarConsolidado(false) }}
        onExport={(comisionConsolidado) => { obtenerConsolidado(comisionConsolidado); console.log(historicoComisionConsolidadoDataTable) }}
        onDelete={(comisionConsolidado) => { console.log(comisionConsolidado); setModalDelete(true); }}
        onEdit={(comisionConsolidado) => { console.log(comisionConsolidado); setModalGenerarEditarConsolidado(true); }}
        open={modalGenerarConsolidado}
      />
      <ModalConsolidadoCambioEmpresa
        data={ProcesarSalida()}
        onClose={() => { setModalConsolidadoCambioEmpresa(false) }}
        onEnviar={(values) => {
          onStoreConsolidadoCambioEmpresa(values, setModalConsolidadoCambioEmpresa);
        }}
        open={modalConsolidadoCambioEmpresa}
      />
      <ModalPreviewReporte
        url={urlPdf}
        onClose={() => { setModalPreview(false) }}
        open={modalPreview}
      />
      <ModalGenerarConsolidado
        data={{
          cicloId: 0,
          dataTable: [],
          descripcion: '',
          estadoReporte: {
            estadoReporteId: 0,
            nombreEstado: ''
          },
          nombre: ''
        }}
        onClose={() => { setModalGenerarEditarConsolidado(false) }}
        onSubmit={(value) => { console.log(value) }}
        open={modalGenerarEditarConsolidado}
      />
      <ModalDelete
        data={{}}
        onClose={() => { setModalDelete(false) }}
        onSubmit={() => { }}
        open={modalDelete}
      />
    </Grid>
  )
}
export default Index;
