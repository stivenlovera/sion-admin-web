import { useState } from "react";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { DataModalEmpresaProps, IEmpresa, initialDataModalEmpresa } from "../../../interfaces/IEmpresa";
import { editEmpresa, listEmpresa } from "../../../services/api-guardian/empresa";

export const useEmpresa = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [dataTable, setdataTable] = useState<IEmpresa[]>([])
    const [loaderPage, setLoaderPage] = useState(true);
    const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
    const [empresa, setEmpresa] = useState<DataModalEmpresaProps>(initialDataModalEmpresa);

    const onListEmpresa = async () => {
        const { data } = await listEmpresa();
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setOpenModalEmpresa(false);
            setdataTable(data.data);
        }
    }

    const onEditarEmpresa = async (funcionarioId: number) => {
        empresa.edit = true;
        const { data } = await editEmpresa(funcionarioId);
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setEmpresa({ ...empresa, empresa: data.data });
            setOpenModalEmpresa(true)
        }
    }
    return {
        loaderPage,
        setLoaderPage,
        openModalEmpresa,
        setOpenModalEmpresa,
        empresa,
        setEmpresa,
        onListEmpresa,
        onEditarEmpresa,
        dataTable
    }
}