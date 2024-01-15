import { useState } from "react";
import { DataModalFuncionarioProps } from "../usuario/components/modal-funcionario";
import { IDataTableFuncionario } from "../../../interfaces/IDataTableFuncionario";
import { IFuncionario } from "../../../interfaces/funcionarios";
import { dataTableFuncionarioService, editFuncionarioService, storeFuncionarioService } from "../../../services/api-guardian/funcionario";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import moment from "moment";
import { initialDataFuncionario } from "../../../interfaces/IAutorize";
export const useFuncionario = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [loaderPage, setLoaderPage] = useState(true);
    const [dataTable, setDataTable] = useState<IDataTableFuncionario[]>([]);
    const [openModalFuncionario, setOpenModalFuncionario] = useState(false);
    const [funcionario, setFuncionario] = useState<DataModalFuncionarioProps>(initialDataFuncionario);

    const createFuncionario = () => {
        funcionario.edit = false;
        setFuncionario(funcionario);
        setOpenModalFuncionario(true)
    }
    const listaFuncionario = async () => {
        const { data } = await dataTableFuncionarioService();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            setDataTable(data.data)
            setLoaderPage(false)
        }
    }

    const storeFuncionario = async (values: IFuncionario) => {
        //convert fecha
        values.fechaIngreso = moment().format('yyyy-MM-DD');
        setLoaderPage(true)
        const { data } = await storeFuncionarioService(values);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setOpenModalFuncionario(false);
            setLoaderPage(true)
            await listaFuncionario();
        }
    }

    const editarFuncionario = async (row: IDataTableFuncionario) => {
        funcionario.edit = true;
        setLoaderPage(true)
        const { data } = await editFuncionarioService(row.funcionarioId);
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setFuncionario({ ...funcionario, funcionario: data.data });
            setOpenModalFuncionario(true)
            setLoaderPage(false)
        }
    }
    return {
        loaderPage,
        dataTable,
        setDataTable,
        funcionario,
        setFuncionario,
        listaFuncionario,
        createFuncionario,
        storeFuncionario,
        editarFuncionario,
        openModalFuncionario,
        setOpenModalFuncionario
    }
}