import { useFormik } from "formik";
import * as Yup from 'yup'
import { IEmpresa } from "../../../../interfaces/IEmpresa";
import { IcomisionConsolidado } from "../../../../interfaces/IComisionConsolidado";
import { IPagoComision } from "../../../../interfaces/IPagoConsolidado";
import { IHistoricoComisionConsolidado } from "../../../../interfaces/IHistoricoConsolidado";

export interface IFormConfigCambioEmpresa {
    pagoConsolidado: IPagoComision,
    configCambioEmpresa: IFormCambioEmpresa[],
    dataTable: IHistoricoComisionConsolidado[];
}

export interface IFormCambioEmpresa {
    configCambioEmpresaId: number;
    empresa: IEmpresa;
    pagoEmpresa: IEmpresa;
    pagoConsolidadoId: number;
    nota: string;
}

export interface useFormikCambioEmpresaProps {
    data: IFormConfigCambioEmpresa;
    onEnviar: (data: IFormConfigCambioEmpresa) => void
}
export const useFormikCambioEmpresa = ({ data, onEnviar }: useFormikCambioEmpresaProps) => {
    const formFormikCambioEmpresa = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema:
            Yup.object().shape({
                nombre: Yup.string(),
                descripcion: Yup.string(),
                cambioEmpresa: Yup.array()
                    .of(
                        Yup.object().shape({
                            CambioEmpresaId: Yup.number(),
                            comisionConsolidadoId: Yup.number(),
                            empresaId: Yup.number(),
                            pagoEmpresaId: Yup.number(),
                            nota: Yup.string()
                        }))
            })
    });
    return {
        formFormikCambioEmpresa
    }
}