import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs';
import { DataTable } from '../../../components/dataTable/datatable';
import { CurrencyAcciones } from '../../../components/dataTable/components/cuztom-column-actions';
import { useDataTableConsolidado } from './hooks/useDataTableConsolidado';
import { IGenerarConsolidados } from '../../../interfaces/IGenerarConsolidados';
import { useConsolidado } from './hooks/useConsolidado';
import LoaderPage from '../../../components/loader-page/loader-page';
import FiltroConsolidado from './components/filtros-consolidado';
import { IFiltroConsolidado } from './hooks/useFormikFiltroConsolidado';
import { initialCiclo } from '../../../interfaces/ICiclo';
import ModalPreviewReporte from '../../Red/components/modal-red-reporte';
import { DataTableToRows } from '../../../utils/DataTableToRows';
import { CurrencyFormatDecimal } from '../../../components/dataTable/components/custom-column-fecha';
import ModalGenerarConsolidado from './components/modal-generar-consolidado';
import { HistorialConsolidado, useModalGenerarConsolidado } from './hooks/useModalGenerarConsolidado';
import VerificarConsolidado from './components/verificar-consolidado';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import { Grid } from '@mui/material';

const Reports = () => {
  const { id } = useParams<{ id?: string }>();
  const [modalPreview, setModalPreview] = useState(false);
  const [urlPdf, setUrlPdf] = useState('')
  const [filtro, setFiltro] = useState<IFiltroConsolidado>({ ciclo: initialCiclo, empresas: [] })

  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting,
  } = useDataTableConsolidado();

  const {
    loaderPage,
    setLoaderPage,
    openModalEmpresa,
    setOpenModalEmpresa,
    empresa,
    setEmpresa,
    onListConsolidados,
    onExportConsolidadoEmpresaEXCEL,
    onExportConsolidadoEmpresaPDF,
    onExportConsolidadoEmpresaPreviewPDF,
    dataTable,
    setdataTable
  } = useConsolidado()

  const SearchByFiltrar = (filtro: IFiltroConsolidado) => {
    setFiltro(filtro);
    setSelection([]);
    onListConsolidados(filtro.ciclo, filtro.empresas)
  }

  const ExportExcel = () => {
    const data = DataTableToRows(dataTable, selection, sorting);
    const nombre_file = `Reporte consolidado ${filtro.ciclo.snombre}`;
    onExportConsolidadoEmpresaEXCEL(filtro, data, nombre_file);
  }
  const ExportPdf = () => {
    const data = DataTableToRows(dataTable, selection, sorting);
    const nombre_file = `Reporte consolidado ${filtro.ciclo.snombre}`;
    onExportConsolidadoEmpresaPDF(filtro, data, nombre_file);
  }
  const ExportPreviewPdf = async () => {
    const data = DataTableToRows(dataTable, selection, sorting);
    const nombre_file = `Reporte consolidado ${filtro.ciclo.snombre}`;

    const url = await onExportConsolidadoEmpresaPreviewPDF(filtro, data, nombre_file);
    setModalPreview(true);
    setUrlPdf(url);
  }

  //generar consolidado
  const {
    loader,
    modalGenerarConsolidado,
    setModalGenerarConsolidado,
    onVerificarConsolidado,
    historialConsolidado,
    onStoreConsolidado,
    sethistorialConsolidado
  } = useModalGenerarConsolidado();

  //guardar consolidado
  const handlerVerificar = () => {
    const data = DataTableToRows(dataTable, selection, sorting)
    historialConsolidado.dataTable = data;
    sethistorialConsolidado(historialConsolidado);
    setModalGenerarConsolidado(true);
  }
  const handlerSaveConsolidado = (values: HistorialConsolidado) => {
    values.cicloId = filtro.ciclo.lcicloId;
    onStoreConsolidado(values, ((load) => setLoaderPage(load)))
  }

  const limpiar = () => {
    setdataTable([]); setSelection([])
  }
  
  useEffect(() => {
  }, [])

  return (
    <Grid container spacing={2}>
      <LoaderPage
        load={loaderPage}
      />
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Cbreadcrumbs icon={<RestorePageIcon />} nombreRoute='Generar consolidados' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
        <FiltroConsolidado
          value={filtro}
          onSubmit={SearchByFiltrar}
          onReset={limpiar}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <VerificarConsolidado
          data={selection}
          onclick={handlerVerificar}
        />
      </Grid>
      <Grid item xs={12} lg={12} md={12}>
        <DataTable
          columns={columns}
          loading={false}
          onSorting={setSorting}
          rows={dataTable}
          sorting={sorting}
          tableColumnExtensions={tableColumnExtensions}
          titulo={'Generar comisiones'}
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
          <CurrencyAcciones
            onEditar={(row) => { row as IGenerarConsolidados; console.log(row) }}
            onEliminar={() => { console.log('eliminar') }}
            column={['lcontactoId']}
          />
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
        <ModalPreviewReporte
          url={urlPdf}
          onClose={() => { setModalPreview(false) }}
          open={modalPreview}
        />
        <ModalGenerarConsolidado
          data={historialConsolidado}
          onClose={() => { setModalGenerarConsolidado(false) }}
          onSubmit={handlerSaveConsolidado}
          open={modalGenerarConsolidado}
        />
      </Grid>
    </Grid>
  )
}

export default Reports
