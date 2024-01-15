import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { DataTable } from '../../../components/dataTable/datatable';
import { IDataTableFuncionario } from '../../../interfaces/IDataTableFuncionario';
import { useDataTableFuncionario } from '../hooks/useDataTableFuncionario';
import { CurrencyAccionesFuncionario } from './components/columns-acciones';
import ModalFuncionario, { DataModalFuncionarioProps } from './components/modal-funcionario';

import LoaderPage from '../../../components/loader-page/loader-page';
import { useFuncionario } from '../hooks/useFuncionario';
import { useAuthorizacion } from '../hooks/useAuthorizacion';
import { ModalAccesos } from './components/modal-acceso';
import { useOutletContext } from 'react-router-dom';
import { IAuthentication, IModulos } from '../../../services/Intefaces/IAuthenticacion';
import { ResolverFunciones } from '../../../utils/resolver-funciones';

const ListaUsuario = () => {
  const context = useOutletContext<IAuthentication>();
  const components = ResolverFunciones('General', 'Empresas', context)
  console.log(components);
  
  const {
    loaderPage,
    dataTable,
    setDataTable,
    listaFuncionario,
    createFuncionario,
    storeFuncionario,
    editarFuncionario,
    openModalFuncionario,
    setOpenModalFuncionario,
    funcionario,
  } = useFuncionario();

  const {
    autorizacion,
    editarAuthorizacion,
    openModalAutorizado,
    setAutorizacion,
    updateAuthorizacion,
    setOpenModalAutorizado
  } = useAuthorizacion();

  const inizialize = async () => {
    await listaFuncionario();
  }

  const HanlderAutorizacion = (row: IDataTableFuncionario) => {
    editarAuthorizacion(row.funcionarioId);
  }

  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting
  } = useDataTableFuncionario();

  useEffect(() => {
    inizialize()
  }, [])

  return (
    <>
      <LoaderPage
        load={loaderPage}
      />
      <Grid container spacing={1}>
        <Grid item xs={12} lg={12} md={12}>
          <Cbreadcrumbs icon={<AssignmentIndIcon />} nombreRoute='Lista usuarios' nombresRoutes={[]} route='#' routes={[]} />
        </Grid>
        <Grid item xs={12} lg={12} md={12}>
          <DataTable
            columns={columns}
            loading={false}
            onSorting={setSorting}
            rows={dataTable}
            sorting={sorting}
            tableColumnExtensions={tableColumnExtensions}
            titulo={'Lista usuarios'}
            onSelecion={setSelection}
            selection={selection}
            nuevoBtn={true}
            onNuevo={createFuncionario}
          >
            <CurrencyAccionesFuncionario
              onAcceso={(row) => { row as IDataTableFuncionario; HanlderAutorizacion(row) }}
              onEditar={(row) => { row as IDataTableFuncionario; editarFuncionario(row) }}
              onEliminar={() => { console.log('eliminar') }}
              column={['funcionarioId']}
            />
          </DataTable>
        </Grid>
        <ModalFuncionario
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
        />
      </Grid>
    </>
  )
}

export default ListaUsuario
