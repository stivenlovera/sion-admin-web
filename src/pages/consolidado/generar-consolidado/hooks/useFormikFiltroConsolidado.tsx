import { useFormik } from "formik";
import * as Yup from 'yup'
import { IEmpresa } from "../../../../interfaces/IEmpresa";
import { ICiclo } from "../../../../interfaces/ICiclo";

export interface IFiltroConsolidado {
    ciclo: ICiclo;
    empresas: IEmpresa[];
}

interface useFormikEmpresaProps {
    data: IFiltroConsolidado;
    onEnviar: (data: IFiltroConsolidado) => void
}
export const useFormikFiltroConsolidado = ({ data, onEnviar }: useFormikEmpresaProps) => {
    const formFiltroConsolidado = useFormik({
        initialValues: data,
        onSubmit: (value) => {
            onEnviar(value)
        },
        validationSchema: Yup.object({
            ciclo: Yup.object().shape({
                company_name: Yup.string(),
                lcicloId: Yup.number(),
                snombre: Yup.string().required('Seleccione un ciclo'),
                dtfechainicio: Yup.string(),
                dtfechafin: Yup.string(),
                lestado: Yup.number(),
                dtfechacierre: Yup.string(),
                dtfechaprecierre1: Yup.string(),
                dtfechaprecierre2: Yup.string(),
                cverenweb: Yup.string(),
                estadogestor: Yup.string()
            }),
            empresas: Yup.array().of(
                Yup.object().shape({
                    lempresaId: Yup.number(),
                    snommbre: Yup.string(),
                    snit: Yup.string(),
                    fechaCreacion: Yup.string(),
                    empresa: Yup.string(),
                })
            ).min(1, 'Seleccione una empresa'),
        })
    });
    return {
        formFiltroConsolidado
    }
}