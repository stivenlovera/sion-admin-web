import { useState } from "react";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { ICiclo, initialDataCiclo } from "../../../interfaces/ICiclo";
import { DataModalICicloProps } from "../components/modal-ciclo";
import { GetAllCiclo, storeCiclo, editarCiclo, updateCiclo, deleteCiclo } from "../../../services/api-guardian/ciclo";
import moment from "moment";

export const useCiclo = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [loaderPage, setLoaderPage] = useState(true);
    const [dataTable, setDataTable] = useState<ICiclo[]>([]);
    const [openModalCiclo, setOpenModalCiclo] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [ciclo, setCiclo] = useState<DataModalICicloProps>(initialDataCiclo);

    const createCiclo = () => {
        ciclo.edit = false;
        setCiclo(ciclo);
        setOpenModalCiclo(true);
    };
    const onListaCiclo = async () => {
        const { data } = await GetAllCiclo();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            setDataTable(data.data);
            setLoaderPage(false);
        }
    };

    const onStoreCiclo = async (values: ICiclo) => {
        //convert fecha
        setLoaderPage(true);
        const { data } = await storeCiclo(values);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setOpenModalCiclo(false);
            setLoaderPage(true);
            await onListaCiclo();
        } else {
            setLoaderPage(false);
        }
    };

    const onEditarCiclo = async (row: ICiclo) => {
        ciclo.edit = true;
        setLoaderPage(true);
        const { data } = await editarCiclo(row.lcicloId);
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setCiclo({ ...ciclo, ciclo: data.data });
            setOpenModalCiclo(true);
            setLoaderPage(false);
        } else {
            setLoaderPage(false);
        }
    };
    const onUpdateCiclo = async (row: ICiclo) => {
        ciclo.edit = true;
        setLoaderPage(true);
        const { data } = await updateCiclo(row);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setOpenModalCiclo(false);
            await onListaCiclo();
        } else {
            setLoaderPage(false);
        }
    };
    const onDeleteCiclo = async (row: ICiclo) => {
        setLoaderPage(true);
        const { data } = await deleteCiclo(row.lcicloId);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setOpenDelete(false);
            await onListaCiclo();
        } else {
            setLoaderPage(false);
        }
    };
    return {
        loaderPage,
        dataTable,
        setDataTable,
        ciclo,
        setCiclo,
        onListaCiclo,
        createCiclo,
        onStoreCiclo,
        onEditarCiclo,
        onUpdateCiclo,
        onDeleteCiclo,
        openModalCiclo,
        setOpenModalCiclo,
        openDelete,
        setOpenDelete
    };
};

