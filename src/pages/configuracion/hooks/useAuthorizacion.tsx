import { useState } from "react";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { DataModalAccesosProps } from "../usuario/components/modal-roles";
import { IAutorizacion, initialDataAutorizado } from "../../../interfaces/IAutorize";
import { editAuthenticate, updateAuthenticate } from "../../../services/api-guardian/authenticacion";

export const useAuthorizacion = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [openModalAutorizado, setOpenModalAutorizado] = useState(false);
    const [autorizacion, setAutorizacion] = useState<DataModalAccesosProps>(initialDataAutorizado);

    const updateAuthorizacion = async (values: IAutorizacion) => {
        const { data } = await updateAuthenticate(values, values.funcionarioId);
        AlertaEvento({ data, enqueueSnackbar, success: true });
        if (data.status == 1) {
            setOpenModalAutorizado(false);
        }
    }

    const editarAuthorizacion = async (funcionarioId: number) => {
        autorizacion.edit = true;
        const { data } = await editAuthenticate(funcionarioId);
        AlertaEvento({ data, enqueueSnackbar, success: false });
        if (data.status == 1) {
            setAutorizacion({ ...autorizacion, autorizacion: data.data });
            setOpenModalAutorizado(true)
        }
    }
    return {
        openModalAutorizado,
        autorizacion,
        setAutorizacion,
        updateAuthorizacion,
        editarAuthorizacion,
        setOpenModalAutorizado
    }
}