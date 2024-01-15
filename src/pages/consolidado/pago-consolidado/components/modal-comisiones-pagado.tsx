import { DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import ModalStandar from "../../../../components/modal-standar/modal-standar";
import { DataTable } from "../../../../components/dataTable/datatable";
import { useEffect } from "react";
import { CurrencyAccionesFechaHora } from "../../../../components/dataTable/components/custom-column-fecha";
import { IcomisionConsolidado } from "../../../../interfaces/IComisionConsolidado";
import { CurrencyAccionesConsolidadoClick } from "../../consolidado/components/buttonAccionesDataTableConsolidado";
import { usePagoConsolidado } from "../hooks/usePagoConsolidad";
import { useDataTablePagoConsolidado } from "../hooks/useDataTablePagoConsolidado";
import { IPagoComisionEstadoReporte } from "../../../../interfaces/IPagoConsolidado";
interface ModalConsolidadoGeneradoProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (comisionConsolidadoId: IPagoComisionEstadoReporte) => void;
    data: any
}
const ModalConsolidadoPagado = ({ open, onClose, onSubmit, data }: ModalConsolidadoGeneradoProps) => {
    const {
        loaderPage,
        setLoaderPage,
        openModalEmpresa,
        setOpenModalEmpresa,
        empresa,
        setEmpresa,
        onListPagoConsolidados,
        dataTablePagoConsolidado,
        setdataTablePagoConsolidado,
        dataTableHistorialPagoConsolidado,
        onListHistorialPagoConsolidados,
        setDataTableHistorialPagoConsolidado
    } = usePagoConsolidado();

    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting,
    } = useDataTablePagoConsolidado();

    useEffect(() => {
        onListPagoConsolidados()
    }, [])

    return (
        <ModalStandar
            maxWidth='lg'
            open={open}
            onClose={onClose}
        >
            <DialogTitle variant='h6'>Seleccione pago consolidado para visualizar</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <DataTable
                            columns={columns}
                            loading={false}
                            onSorting={setSorting}
                            rows={dataTablePagoConsolidado}
                            sorting={sorting}
                            tableColumnExtensions={tableColumnExtensions}
                            titulo={'Consolidados registrados'}
                            onSelecion={setSelection}
                            selection={selection}
                        >
                            <CurrencyAccionesFechaHora
                                column={['fechaCreacion']}
                            />
                            <CurrencyAccionesConsolidadoClick
                                column={['pagonConsolidadoId']}
                                onEditar={() => {console.log('editar') }}
                                onEliminar={() => {console.log('eliminar') }}
                                onExport={(row: IPagoComisionEstadoReporte) => { onSubmit(row);}}
                            />
                        </DataTable>
                    </Grid>
                </Grid>
            </DialogContent>
        </ModalStandar>
    )
}

export default ModalConsolidadoPagado
