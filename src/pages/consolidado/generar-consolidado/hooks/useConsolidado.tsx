import { useState } from "react";
import { AlertaEvento } from "../../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { DataModalEmpresaProps, IEmpresa, initialDataModalEmpresa } from "../../../../interfaces/IEmpresa";
import { listConsolidado, reportExcel, reportPDF } from "../../../../services/api-guardian/generarConsolidado";
import { IGenerarConsolidados } from "../../../../interfaces/IGenerarConsolidados";
import { IFiltroConsolidado } from "./useFormikFiltroConsolidado";
import { ICiclo } from "../../../../interfaces/ICiclo";
import { BlobToFile } from "../../../../utils/BlobToFile";

export const useConsolidado = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [dataTable, setdataTable] = useState<IGenerarConsolidados[]>([])
    const [loaderPage, setLoaderPage] = useState(false);
    const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
    const [empresa, setEmpresa] = useState<DataModalEmpresaProps>(initialDataModalEmpresa);

    const onListConsolidados = async (ciclo: ICiclo, empresa: IEmpresa[]) => {
        setLoaderPage(true)
        const { data } = await listConsolidado(ciclo, empresa);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setdataTable(data.data);
            setLoaderPage(false)
        }
    }
    const onExportConsolidadoEmpresaEXCEL = async (filtro: IFiltroConsolidado, dataTable: IGenerarConsolidados[], nombreExcel: string) => {
        const { data } = await reportExcel(filtro, dataTable);
        BlobToFile(data, `${nombreExcel}.xlsx`)
    }

    const onExportConsolidadoEmpresaPDF = async (filtro: IFiltroConsolidado, dataTable: IGenerarConsolidados[], nombreExcel: string) => {
        const { data } = await reportPDF(filtro, dataTable);
        BlobToFile(data, `${nombreExcel}.pdf`)
    }

    const onExportConsolidadoEmpresaPreviewPDF = async (filtro: IFiltroConsolidado, dataTable: IGenerarConsolidados[], nombreExcel: string) => {
        const { data } = await reportPDF(filtro, dataTable);
        const url = window.URL.createObjectURL(new Blob([data],{type: "application/pdf"}));
        return url;
    }
    return {
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
    }
}