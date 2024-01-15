import { useFormik } from "formik";
import * as Yup from 'yup'
import { IAsesor } from "../../../interfaces/IAsesor";
import { INivel } from "../../../interfaces/INivel";
import { IPais } from "../../../interfaces/IPais";
import { IContactoPeril } from "../../../interfaces/IContactoPeril";

export interface IFormAsesor {
    asesor: IAsesor;
    pais: IPais;
    nivel: INivel;
    contactoPerfil: IContactoPeril,
    patrocinador: IAsesor
}

interface useFormikEmpresaProps {
    data: IFormAsesor;
    onEnviar: (data: IFormAsesor) => void
}
export const useFormikAsesor = ({ data, onEnviar }: useFormikEmpresaProps) => {
    const formAsesor = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema: Yup.object({
            asesor: Yup.object().shape({
                susuarioadd: Yup.string(),
                dtfechaadd: Yup.date(),
                susuariomod: Yup.string(),
                dtfechamod: Yup.date(),
                lcontactoId: Yup.number(),
                scodigo: Yup.string(),
                stelefonofijo: Yup.string(),
                stelefonomovil: Yup.string(),
                scorreoelectronico: Yup.string().email('Email no valido').required('Email es requerido'),
                cestado: Yup.string(),
                bifoto: Yup.string(),
                dtfechanacimiento: Yup.date().typeError('Fecha invalida'),
                sdireccion: Yup.string().required('Dirrecion es requerido!'),
                lpaisId: Yup.number().min(1, 'Seleccione pais').required('Seleccione pais'),
                sciudad: Yup.string().required('Cuidad es requerido'),
                scedulaidentidad: Yup.string().required('Cedula identidad es requerido'),
                lpatrocinanteId: Yup.number(),
                lnivelId: Yup.number(),
                dtfecharegistro: Yup.date().required('fecha requerida'),
                snombrecompleto: Yup.string().required('Nombre completo es requerido'),
                dtfechacalculo: Yup.date(),
                dlotes: Yup.number(),
                dproduccion: Yup.number(),
                cvolante: Yup.string(),
                cpresentacion: Yup.string(),
                ccena: Yup.string(),
                ctv: Yup.string(),
                cperiodico: Yup.string(),
                cradio: Yup.string(),
                cweb: Yup.string(),
                sotro: Yup.string().required('este campo es obligatorio'),
                ccorreo: Yup.string(),
                ltipocontactoId: Yup.number(),
                cpresentafactura: Yup.string(),
                ddescuentolote: Yup.number(),
                snotadescuentolote: Yup.string(),
                stelefonooficina: Yup.string(),
                scontrasena: Yup.string(),
                lpatrotempId: Yup.number(),
                lnit: Yup.number(),
                lcuentabanco: Yup.string(),
                lcodigobanco: Yup.number(),
                ctienecuenta: Yup.string(),
                cbaja: Yup.string(),
                dtfechabaja: Yup.date(),
                ltipobaja: Yup.number(),
                smotivobaja: Yup.string(),
                pmax: Yup.number(),
                pvitalicio: Yup.number(),
            }),
            nivel: Yup.object().shape({
                susuarioadd: Yup.string(),
                dtfechaadd: Yup.date(),
                susuariomod: Yup.string(),
                dtfechamod: Yup.date(),
                lnivelId: Yup.number().min(1, 'Seleccione pais').required('Seleccione pais'),
                ssigla: Yup.string(),
                snombre: Yup.string(),
                ddesde: Yup.number(),
                dhasta: Yup.number(),
                dbono: Yup.number(),
                dbonomembresia: Yup.number(),
            }),
            pais:
                Yup.object().shape({
                    lPaisId: Yup.number().min(1, 'Seleccione pais').required('Seleccione pais'),
                    sNombre: Yup.string().required('Seleccione pais'),
                    sUsuarioAdd: Yup.string(),
                    dtFechaAdd: Yup.date(),
                    sUsuarioMod: Yup.string(),
                    dtFechaMod: Yup.date(),
                }),
            contactoPerfil:
                Yup.object().shape({
                    id: Yup.number(),
                    lcontactoId: Yup.number(),
                    imgPerfil: Yup.string()
                })
        })
    });
    return {
        formAsesor
    }
}