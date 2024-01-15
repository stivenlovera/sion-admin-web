import { useState } from "react";
import { IDataTableFuncionario } from "../../../interfaces/IDataTableFuncionario";
import { dataTableFuncionarioService, editFuncionarioService, storeFuncionarioService } from "../../../services/api-guardian/funcionario";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { VerificarAuthenticate, login, logout, refreshToken } from "../../../services/api-guardian/authenticacion";
import { centralizarAuthenticacion, initialStateAuthenticacion } from "../utils/initialStateLogin";
import { ResIVerificarAuthenticacion, loginDto } from "../../../interfaces/ILogin";
import { NoauthenticacionInitial } from "../../../utils/initialState";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../../Reducers/Slices/LoginSlice";
export const useAuthenticate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const updateToken = (token: string) => {
        dispatch(
            setToken({
                token: token
            })
        )
    }
    const updateLogout = (token: boolean) => {
        dispatch(
            setToken({
                token: token
            })
        )
    }
    const { enqueueSnackbar } = useSnackbar();
    const [loaderPage, setLoaderPage] = useState(true);
    const [dataTable, setDataTable] = useState<IDataTableFuncionario[]>([]);
    const [openModalFuncionario, setOpenModalFuncionario] = useState(false);
    const [authorizacion, setAuthorizacion] = useState(NoauthenticacionInitial)

    const getAuthenticate = async () => {
        const { data } = await VerificarAuthenticate();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            const reestructurado = centralizarAuthenticacion(data.data)
            setAuthorizacion(reestructurado)
            setLoaderPage(false)
        }
    }

    const listaFuncionario = async () => {
        const { data } = await dataTableFuncionarioService();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            setDataTable(data.data)
            setLoaderPage(false)
        }
    }

    const onLogin = async (value: loginDto) => {
        const { data, status } = await login(value);
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            updateToken(data.data.autheticate.token);
            navigate('/')
        }
    }

    const onLogout = async () => {
        const { data, status } = await logout();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            updateLogout(false);
        }
    }

    const onRefreshToken = async () => {
        const { data, status } = await refreshToken();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            updateToken(data.data.token);
        }
    }
    return {
        authorizacion,
        loaderPage,
        getAuthenticate,
        setDataTable,
        listaFuncionario,
        openModalFuncionario,
        setOpenModalFuncionario,
        onLogin,
        onLogout,
        onRefreshToken
    }
}
