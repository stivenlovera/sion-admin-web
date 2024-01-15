import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataTable } from '../../components/dataTable/datatable';
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { useListCiclo } from './hook/useListCiclo';
import { ICiclo } from '../../interfaces/ICiclo';
import { useCiclo } from './hook/useCiclo';
import LoaderPage from '../../components/loader-page/loader-page';
import { CurrencyAccionesClick } from '../../components/dataTable/components/custom-columns-acciones-click';
import ModalCiclo from './components/modal-ciclo';
import { CurrencyAccionesFecha, CurrencyAccionesFechaHora } from '../../components/dataTable/components/custom-column-fecha';
import { CurrencyAccionesVerWeb } from './components/column-ver-web';
import { CurrencyAccionesEstado } from './components/colums-estado';
import { ModalDelete } from '../../components/modal-delete/modal-delete';

const IndexCiclo = () => {
    const {
        ciclo,
        createCiclo,
        onStoreCiclo,
        dataTable,
        loaderPage,
        onEditarCiclo,
        onDeleteCiclo,
        onUpdateCiclo,
        onListaCiclo,
        setOpenModalCiclo,
        openModalCiclo,
        openDelete,
        setOpenDelete,
        setCiclo
    } = useCiclo();

    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting
    } = useListCiclo();

    const inizialize = async () => {
        await onListaCiclo();
    }

    const handlerSubmit = async (row: ICiclo) => {
        if (ciclo.edit) {
            await onUpdateCiclo(row);
        } else {
            await onStoreCiclo(row);
        }
    }

    const handlerDelete = async (row: ICiclo) => {
        setOpenDelete(true)
        setCiclo({ ciclo: row, edit: false });
    }

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
                    <Cbreadcrumbs icon={<EventRepeatIcon />} nombreRoute='Lista ciclos' nombresRoutes={[]} route='#' routes={[]} />
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                    <DataTable
                        columns={columns}
                        loading={false}
                        onSorting={setSorting}
                        rows={dataTable}
                        sorting={sorting}
                        tableColumnExtensions={tableColumnExtensions}
                        titulo={'Lista ciclos'}
                        onSelecion={setSelection}
                        selection={selection}
                        nuevoBtn={true}
                        onNuevo={createCiclo}
                    >
                        <CurrencyAccionesClick
                            onEditar={(row) => { row as ICiclo; onEditarCiclo(row) }}
                            onEliminar={(row) => { row as ICiclo; handlerDelete(row) }}
                            column={['lcicloId']}
                        />
                        <CurrencyAccionesFecha
                            column={['dtfechainicio']}
                        />
                        <CurrencyAccionesFecha
                            column={['dtfechafin']}
                        />
                        <CurrencyAccionesFechaHora
                            column={['dtfechacierre']}
                        />
                        <CurrencyAccionesFecha
                            column={['dtfechaprecierre1']}
                        />
                        <CurrencyAccionesFecha
                            column={['dtfechaprecierre2']}
                        />
                        <CurrencyAccionesVerWeb
                            column={['cverenweb']}
                        />
                        <CurrencyAccionesEstado
                            column={['lestado']}
                        />
                    </DataTable>
                </Grid>
            </Grid>
            <ModalCiclo
                data={ciclo}
                onClose={() => { setOpenModalCiclo(false) }}
                onSubmit={handlerSubmit}
                open={openModalCiclo}
            />
            <ModalDelete
                data={ciclo}
                onClose={() => { setOpenDelete(false) }}
                onSubmit={(data) => { onDeleteCiclo(data.ciclo) }}
                open={openDelete}
            />
        </>
    )
}

export default IndexCiclo
