import { useFormik } from "formik";
import * as Yup from 'yup'
import { IEmpresa } from "../../../interfaces/IEmpresa";
interface useFormikEmpresaProps {
    data: IEmpresa;
    onEnviar: (data: IEmpresa) => void
}
export const useFormikEmpresa = ({ data, onEnviar }: useFormikEmpresaProps) => {
    const formEmpresa = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema: Yup.object({
            lempresaId: Yup.number(),
            snommbre: Yup.string()
                .min(5, 'debe ser mayor a 1 caracteres')
                .required('Passwrod es requerido!'),
            snit: Yup.number().default(0),
            fechaCreacion: Yup.string(),
            empresa: Yup.string().min(1, 'debe ser mayor a 1 caracteres')
                .required('Passwrod es requerido!'),
        })
    });
    return {
        formEmpresa
    }
}