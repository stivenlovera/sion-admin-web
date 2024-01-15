import moment from "moment";

export interface IFuncionario {
    nombres: string;
    apellidos: string;
    fechaIngreso: string;
    cargoId: number;
    nroDocumento: string;
    funcionarioId: number;
    observaciones: string;
    estado: number;
    alias: string;
    email: string;
};
export const initialFuncionario: IFuncionario = {
    apellidos: '',
    cargoId: 0,
    nroDocumento: '',
    fechaIngreso: moment().format('DD/MM/yyyy hh:mm:ss'),
    funcionarioId: 0,
    nombres: '',
    observaciones: '',
    estado: 0,
    alias: '',
    email: ''
}