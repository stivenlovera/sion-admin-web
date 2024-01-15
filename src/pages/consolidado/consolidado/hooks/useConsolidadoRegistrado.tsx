import { useState } from "react";
import { AlertaEvento } from "../../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { BlobToFile } from "../../../../utils/BlobToFile";
import { GetCambioEmpresa, StoreCambioEmpresa, getConsolidadoRegistrado, listConsolidadoRegistrado, reportComisionConsolidadoEXCEL, reportComisionConsolidadoPDF } from "../../../../services/api-guardian/historialConsolidado";
import { IcomisionConsolidado } from "../../../../interfaces/IComisionConsolidado";
import { IFormConfigCambioEmpresa } from "./useFormikCambioEmpresa";
import { IHistoricoComisionConsolidado } from "../../../../interfaces/IHistoricoConsolidado";


export const useConsolidadoRegistrado = () => {
    const { enqueueSnackbar } = useSnackbar();
    const initialStateCambioEmpresa = {
        configCambioEmpresa: [],
        pagoConsolidado: {
            comisionConsolidadoId: 0,
            descripcion: '',
            estadoReporteId: 0,
            nombre: '',
            pagoConsolidadoId: 0
        },
        dataTable: []
    }
    const [dataTable, setdataTable] = useState<IcomisionConsolidado[]>([]);
    const [historicoComisionConsolidadoDataTable, setHistoricoComisionConsolidadoDataTable] = useState<IHistoricoComisionConsolidado[]>([]);

    const [loaderPage, setLoaderPage] = useState(false);
    const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
    const [cambioEmpresa, setCambioEmpresa] = useState<IFormConfigCambioEmpresa>(initialStateCambioEmpresa);

    const onListConsolidadoRegistrado = async () => {
        setLoaderPage(true)
        const { data } = await listConsolidadoRegistrado();
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setdataTable(data.data);
            setLoaderPage(false)
        }
    }
    const onGetOneConsolidadoRegistrado = async (comisionConsolidadoId: number) => {
        setLoaderPage(true)
        const { data } = await getConsolidadoRegistrado(comisionConsolidadoId);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setHistoricoComisionConsolidadoDataTable(data.data);
            setLoaderPage(false)
        }
    }
    const onGetOneConsolidadoCambioEmpresa = async (comisionConsolidadoId: number) => {
        setLoaderPage(true)
        const { data } = await GetCambioEmpresa(comisionConsolidadoId);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setCambioEmpresa(data.data);
        }
        setLoaderPage(false)
    }
    const onStoreConsolidadoCambioEmpresa = async (formCambioEmpresa: IFormConfigCambioEmpresa, closeModal: (modal: boolean) => void) => {
        setLoaderPage(true)
        const { data } = await StoreCambioEmpresa(formCambioEmpresa);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            closeModal(false)
        } else {
        }
        setLoaderPage(false)
    }
    const onExportComisionConsolidadoEXCEL = async (consolidado: IcomisionConsolidado, dataTable: IHistoricoComisionConsolidado[], nombreExcel: string) => {
        const { data } = await reportComisionConsolidadoEXCEL(consolidado, dataTable);
        BlobToFile(data, `${nombreExcel}.xlsx`)
    }
    const onExporComisiontConsolidadaPDF = async (consolidado: IcomisionConsolidado, dataTable: IHistoricoComisionConsolidado[], nombreExcel: string) => {
        const { data } = await reportComisionConsolidadoPDF(consolidado, dataTable);
        BlobToFile(data, `${nombreExcel}.pdf`)
    }
    const onExportComisionConsolidadoPreviewPDF = async (consolidado: IcomisionConsolidado, dataTable: IHistoricoComisionConsolidado[], nombreExcel: string) => {
        const { data } = await reportComisionConsolidadoPDF(consolidado, dataTable);
        const url = window.URL.createObjectURL(new Blob([data], { type: "application/pdf" }));
        return url;
    }
    return {
        loaderPage,
        setLoaderPage,
        openModalEmpresa,
        setOpenModalEmpresa,
        cambioEmpresa,
        setCambioEmpresa,
        onListConsolidadoRegistrado,
        onGetOneConsolidadoRegistrado,
        onGetOneConsolidadoCambioEmpresa,
        onStoreConsolidadoCambioEmpresa,
        onExportComisionConsolidadoEXCEL,
        onExporComisiontConsolidadaPDF,
        onExportComisionConsolidadoPreviewPDF,
        historicoComisionConsolidadoDataTable,
        setHistoricoComisionConsolidadoDataTable,
        dataTable
    }
}