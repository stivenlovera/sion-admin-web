import { useFormik } from "formik";
import * as Yup from 'yup'
import { ICiclo } from "../../../interfaces/ICiclo";
interface useFormikCicloProps {
    data: ICiclo;
    onEnviar: (data: ICiclo) => void
}
export const useFormikCiclo = ({ data, onEnviar }: useFormikCicloProps) => {

    const formCiclo = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema: Yup.object({
            lcicloId: Yup.number(),
            snombre: Yup.string()
                .required('Nombre es requerido!'),
            dtfechainicio: Yup.string()
                .required('Fecha inicio es es requerido!'),
            dtfechafin: Yup.string()
                .required('Fecha fin es requerido!'),
            lestado: Yup.number(),
            dtfechacierre: Yup.string(),
            dtfechaprecierre1: Yup.string()
                .required('Fecha pre cierre1 es requerido!'),
            dtfechaprecierre2: Yup.string()
                .required('Fecha pre cierre2 es requerido!'),
        })
    });
    return {
        formCiclo
    }
}