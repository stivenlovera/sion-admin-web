import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import BusinessIcon from '@mui/icons-material/Business';
import { DataTable } from '../../components/dataTable/datatable';
import { CurrencyAcciones } from '../../components/dataTable/components/cuztom-column-actions';
import { useOutletContext } from 'react-router-dom';
import { IAuthentication, IModulos } from '../../services/Intefaces/IAuthenticacion';
import { ResolverFunciones } from '../../utils/resolver-funciones';
import ModalEmpresa from './components/modal-empresa';
import { useEmpresa } from './hooks/useEmpresa';
import { useDataTableEmpresa } from './hooks/useDatatTableEmpresa';
import { IEmpresa } from '../../interfaces/IEmpresa';
import { CurrencyAccionesFecha } from '../../components/dataTable/components/custom-column-fecha';

const IndexEmpresa = () => {
  const context = useOutletContext<IAuthentication>();
  const components = ResolverFunciones('General', 'Empresas', context)

  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting
  } = useDataTableEmpresa();

  const {
    loaderPage,
    setLoaderPage,
    openModalEmpresa,
    setOpenModalEmpresa,
    empresa,
    setEmpresa,
    onListEmpresa,
    onEditarEmpresa,
    dataTable
  } = useEmpresa();

  const inizialize = () => {
    onListEmpresa()
  }

  useEffect(() => {
    inizialize()
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={12} md={12}>
        <Cbreadcrumbs icon={<BusinessIcon />} nombreRoute='Lista empresa' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
      <Grid item xs={12} lg={12} md={12}>
        <DataTable
          columns={columns}
          loading={false}
          onSorting={setSorting}
          rows={dataTable}
          sorting={sorting}
          tableColumnExtensions={tableColumnExtensions}
          titulo={'Lista empresa'}
          onSelecion={setSelection}
          selection={selection}
          nuevoBtn={false}
        >
          <CurrencyAcciones
            onEditar={(row) => { row as IEmpresa; console.log(row) }}
            onEliminar={() => { console.log('eliminar') }}
            column={['lempresaId']}
          />
          <CurrencyAccionesFecha
            column={['fechaCreacion']}
          />
        </DataTable>
      </Grid>
      <ModalEmpresa
        data={empresa}
        onClose={() => { setOpenModalEmpresa(false) }}
        onSubmit={() => { }}
        open={openModalEmpresa} />
    </Grid>
  )
}

export default IndexEmpresa
