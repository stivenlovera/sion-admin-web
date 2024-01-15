import { useState } from "react";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import moment from "moment";
import { IProyeccion } from "../../../interfaces/IProyeccion";
import { GetAllProyeccionService } from "../../../services/api-guardian/proyeccion";
export const useProyeccion = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [loaderPage, setLoaderPage] = useState(true);
    const [dataTable, setDataTable] = useState<IProyeccion[]>([]);
    const [openModalProyeccion, setOpenModalProyeccion] = useState(false);
    /* const [Proyeccion, setProyeccion] = useState<DataModalProyeccionProps>(IProyeccion); */

   /*  const createProyeccion = () => {
        Proyeccion.edit = false;
        setProyeccion(Proyeccion);
        setOpenModalProyeccion(true)
    } */

    const listaProyeccion = async () => {
        const { data } = await GetAllProyeccionService();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            setDataTable(data.data)
            setLoaderPage(false)
        }
    }

    /* const storeProyeccion = async (values: IProyeccion) => {
        //convert fecha
        values.fechaIngreso = moment().format('yyyy-MM-DD');
        setLoaderPage(true)
        const { data } = await storeProyeccionService(values);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setOpenModalProyeccion(false);
            setLoaderPage(true)
            await listaProyeccion();
        }
    }

    const editarProyeccion = async (row: IDataTableProyeccion) => {
        Proyeccion.edit = true;
        setLoaderPage(true)
        const { data } = await editProyeccionService(row.ProyeccionId);
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setProyeccion({ ...Proyeccion, Proyeccion: data.data });
            setOpenModalProyeccion(true)
            setLoaderPage(false)
        }
    } */
    return {
        loaderPage,
        dataTable,
        setDataTable,
        /* Proyeccion,
        setProyeccion, */
        listaProyeccion,
       /*  createProyeccion,
        storeProyeccion,
        editarProyeccion, */
        openModalProyeccion,
        setOpenModalProyeccion
    }
}