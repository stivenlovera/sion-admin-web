import { useFormik } from "formik";
import * as Yup from 'yup'
import { HistorialConsolidado } from "./useModalGenerarConsolidado";
interface useFormikEmpresaProps {
    data: HistorialConsolidado;
    onEnviar: (data: HistorialConsolidado) => void
}
export const useFormModalConsolidado = ({ data, onEnviar }: useFormikEmpresaProps) => {
    const formHistorialConsolidado = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value);
        },
        validationSchema: Yup.object({
            estadoReporte: Yup.object().shape({
                nombre: Yup.string(),
                estadoReporteId: Yup.number()
            }),
            nombre: Yup.string().required('nombre requerida'),
            descripcion: Yup.string().required('Descripcion requerida'),
            dataTable: Yup.array()
        })
    });
    return {
        formHistorialConsolidado
    }
}