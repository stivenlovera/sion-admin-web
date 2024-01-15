import { useFormik } from "formik";
import * as Yup from 'yup'
import { IFuncionario } from "../../../interfaces/funcionarios";
import { error } from "console";
import { IAutorizacion } from "../../../interfaces/IAutorize";
interface useFormikAutorizacionProps {
    data: IAutorizacion;
    onEnviar: (data: IAutorizacion) => void
}
export const useFormikAutorizacion = ({ data, onEnviar }: useFormikAutorizacionProps) => {
    const formAutorizacion = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema: Yup.object({
            usuario: Yup.string().min(3, 'Debe ser mayor a 3 caracteres!')
                .required('Usuario es requerido!'),
            password: Yup.string()
                .min(5, 'debe ser mayor a 4 caracteres')
                .required('Passwrod es requerido!'),
            activo: Yup.number(),
            funcionarioId: Yup.number(),
            autorizacionId: Yup.number(),
            roles: Yup.array().of(
                Yup.object().shape({
                    rolId: Yup.string().required("Selecione un rol"),
                    nombreRol: Yup.string()
                })
            ).min(1,'Selecione almenos un rol'),
        })
    });
    return {
        formAutorizacion
    }
}