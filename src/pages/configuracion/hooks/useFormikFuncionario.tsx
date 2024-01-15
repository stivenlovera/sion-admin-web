import { useFormik } from "formik";
import * as Yup from 'yup'
import { IFuncionario } from "../../../interfaces/funcionarios";
import { error } from "console";
interface useFormikFuncionarioProps {
    data: IFuncionario;
    onEnviar: (data: IFuncionario) => void
}
export const useFormikFuncionario = ({ data, onEnviar }: useFormikFuncionarioProps) => {

    const formFuncionario = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            //VALIDAR EMAIL
            const separadorArroba = value.email.split('@');
            if (separadorArroba[1] != process.env.REACT_APP_EMAIL_CORPORATIVO) {
                formFuncionario.setFieldError('email', 'Email no corporativo');
            }
            else {
                onEnviar(value)
            }
        },
        validationSchema: Yup.object({
            cargoId: Yup.number().min(1, 'Cargo es requerido!')
                .required('Cargo es requerido!'),
            nroDocumento: Yup.string()
                .min(5, 'debe ser mayor a 4 digitos')
                .required('Nro de documento es requerido!'),
            nombres: Yup.string()
                .required('Nombres es requerido!'),
            apellidos: Yup.string()
                .required('Apellidos es requerido!'),
            observacion: Yup.string(),
            fechaIngreso: Yup.string(),
            email: Yup.string().email('Debe ser un email').required('Email es requerido!'),
            alias: Yup.string(),
        })
    });
    return {
        formFuncionario
    }
}