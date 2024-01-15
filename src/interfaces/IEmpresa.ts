import dayjs from "dayjs";
export interface IEmpresa {
    lempresaId: number;
    snombre: string;
    snit: number;
    fechaCreacion: string;
    empresa: string;
}
export interface DataModalEmpresaProps {
    edit: boolean;
    empresa: IEmpresa;
}
export const initialStateEmpresa: IEmpresa = {
    empresa: '',
    fechaCreacion: dayjs().format('DD/MM/YYYY'),
    lempresaId: 0,
    snit: 0,
    snombre: ''
}
export const initialDataModalEmpresa: DataModalEmpresaProps = {
    edit: false,
    empresa: initialStateEmpresa
}