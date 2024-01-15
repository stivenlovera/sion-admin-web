import { useState } from "react";
import { AlertaEvento } from "../../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { DataModalEmpresaProps, IEmpresa, initialDataModalEmpresa } from "../../../../interfaces/IEmpresa";
import { BlobToFile } from "../../../../utils/BlobToFile";
import { PagoHistorialReportExcel, PagoHistorialReportPDF, listHistorialPagoConsolidado, listPagoConsolidado } from "../../../../services/api-guardian/historialPagoConsolidado";
import { IPagoComision, IPagoComisionEstadoReporte } from "../../../../interfaces/IPagoConsolidado";
import { IHistoricoPagoConsolidado } from "../../../../interfaces/IHistoricoPagoConsolidado";

export const usePagoConsolidado = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [dataTablePagoConsolidado, setdataTablePagoConsolidado] = useState<IPagoComision[]>([]);
    const [dataTableHistorialPagoConsolidado, setDataTableHistorialPagoConsolidado] = useState<IHistoricoPagoConsolidado[]>([])
    const [loaderPage, setLoaderPage] = useState(false);
    const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
    const [empresa, setEmpresa] = useState<DataModalEmpresaProps>(initialDataModalEmpresa);

    const onListPagoConsolidados = async () => {
        setLoaderPage(true)
        const { data } = await listPagoConsolidado();
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setdataTablePagoConsolidado(data.data);
            setLoaderPage(false)
        }
    }
    const onListHistorialPagoConsolidados = async (pagoConsolidadoId: number, loading: (modal: boolean) => void) => {
        loading(true)
        const { data } = await listHistorialPagoConsolidado(pagoConsolidadoId);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setDataTableHistorialPagoConsolidado(data.data);
            setLoaderPage(false)
        }
        loading(false)
    }
    const onExportConsolidadoEmpresaEXCEL = async (filtro: IPagoComisionEstadoReporte, dataTable: IHistoricoPagoConsolidado[], nombreExcel: string) => {
        const { data } = await PagoHistorialReportExcel(filtro, dataTable);
        BlobToFile(data, `${nombreExcel}.xlsx`)
    }

    const onExportConsolidadoEmpresaPDF = async (filtro: IPagoComisionEstadoReporte, dataTable: IHistoricoPagoConsolidado[], nombreExcel: string) => {
        const { data } = await PagoHistorialReportPDF(filtro, dataTable);
        BlobToFile(data, `${nombreExcel}.pdf`)
    }

    const onExportConsolidadoEmpresaPreviewPDF = async (filtro: IPagoComisionEstadoReporte, dataTable: IHistoricoPagoConsolidado[], nombreExcel: string) => {
        const { data } = await PagoHistorialReportPDF(filtro, dataTable);
        const url = window.URL.createObjectURL(new Blob([data], { type: "application/pdf" }));
        return url;
    }
    return {
        loaderPage,
        setLoaderPage,
        openModalEmpresa,
        setOpenModalEmpresa,
        empresa,
        setEmpresa,
        onListPagoConsolidados,
        onExportConsolidadoEmpresaEXCEL,
        onExportConsolidadoEmpresaPDF,
        onExportConsolidadoEmpresaPreviewPDF,
        dataTablePagoConsolidado,
        onListHistorialPagoConsolidados,
        setdataTablePagoConsolidado,
        dataTableHistorialPagoConsolidado,
        setDataTableHistorialPagoConsolidado
    }
}