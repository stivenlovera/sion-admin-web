import { useFormik } from "formik";
import * as Yup from 'yup'
import { IEmpresa } from "../../../../interfaces/IEmpresa";
import { ICiclo } from "../../../../interfaces/ICiclo";

export interface IFiltroFacturacionConsolidado {
    comisionConsolidadoId: number;
}

export interface useFormikFacturacionConsolidadProps {
    comisionConsolidadoId: number;
    onEnviar: (value: IFiltroFacturacionConsolidado) => void
}
export const useFormikFactucionConsolidado = ({ comisionConsolidadoId, onEnviar }: useFormikFacturacionConsolidadProps) => {
    const formFiltroFacturacionConsolidado = useFormik({
        initialValues: {
            comisionConsolidadoId: comisionConsolidadoId
        },
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema: Yup.object({
            comisionConsolidadoId: Yup.number().required('Seleccione un consolidado').min(1, 'Seleccione un consolidado').required('es requerido'),
        })
    });
    return {
        formFiltroFacturacionConsolidado
    }
}