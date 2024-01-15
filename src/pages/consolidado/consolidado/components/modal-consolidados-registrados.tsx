import { DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import ModalStandar from "../../../../components/modal-standar/modal-standar";
import { DataTable } from "../../../../components/dataTable/datatable";
import { useDataTableConsolidadoRegistrado } from "../hooks/useDataTableConsolidadoRegistrado";
import { useConsolidadoRegistrado } from "../hooks/useConsolidadoRegistrado";
import { useEffect } from "react";
import { CurrencyAccionesFechaHora } from "../../../../components/dataTable/components/custom-column-fecha";
import { CurrencyAccionesConsolidadoClick } from "./buttonAccionesDataTableConsolidado";
import { IcomisionConsolidado } from "../../../../interfaces/IComisionConsolidado";
interface ModalConsolidadoGeneradoProps {
    open: boolean;
    onClose: () => void;
    onExport: (comisionConsolidadoId: IcomisionConsolidado) => void;
    onEdit: (comisionConsolidadoId: IcomisionConsolidado) => void;
    onDelete: (comisionConsolidadoId: IcomisionConsolidado) => void;
    data: any
}
const ModalConsolidadoGenerado = ({ open, onClose, onExport, onDelete, onEdit, data }: ModalConsolidadoGeneradoProps) => {
    const {
        onListConsolidadoRegistrado,
        dataTable
    } = useConsolidadoRegistrado()

    const {
        columns,
        tableColumnExtensions,
        selection,
        setSelection,
        setSorting,
        sorting,
    } = useDataTableConsolidadoRegistrado();

    useEffect(() => {
        onListConsolidadoRegistrado()
    }, [open])

    return (
        <ModalStandar
            maxWidth='lg'
            open={open}
            onClose={onClose}
        >
            <DialogTitle variant="subtitle1" style={{ fontWeight: 'bold' }}>Selecione consolidado para visualizar</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <DataTable
                            columns={columns}
                            loading={false}
                            onSorting={setSorting}
                            rows={dataTable}
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
                                column={['comisionConsolidadoId']}
                                onEditar={(row) => { onEdit(row) }}
                                onEliminar={(row) => { onDelete(row) }}
                                onExport={(row: IcomisionConsolidado) => { onExport(row) }}
                            />
                        </DataTable>
                    </Grid>
                </Grid>
            </DialogContent>
        </ModalStandar>
    )
}

export default ModalConsolidadoGenerado
