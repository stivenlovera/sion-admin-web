import { DataModalAccesosProps } from "../pages/configuracion/usuario/components/modal-roles";
import { DataModalFuncionarioProps } from "../pages/configuracion/usuario/components/modal-funcionario";
import { IDataTableFuncionario } from "./IDataTableFuncionario";
import { initialFuncionario } from "./funcionarios";
import { IRol } from "./roles";

export interface IAutorizacion {
    autorizacionId: number;
    usuario: string;
    password: string;
    activo: number;
    funcionarioId: number;
    roles:IRol[]
}
export interface IAutorizacionLista {
    documento: string;
    autorizacionId: number;
    usuario: string;
    password: string;
    activo: number;
    funcionarioId: number;
    nombres: string;
    apellidos: string;
};
export const initialAutorizacionLista: IAutorizacionLista = {
    documento: '',
    usuario: '',
    password: '',
    activo: 0,
    apellidos: '',
    funcionarioId: 0,
    nombres: '',
    autorizacionId: 0
}
export const initialAutorizacion: IAutorizacion = {
    activo: 0,
    autorizacionId: 0,
    funcionarioId: 0,
    password: '',
    usuario: '',
    roles:[]
}
export const initialDataTableAsesor: IDataTableFuncionario[] = []
export const initialDataFuncionario: DataModalFuncionarioProps = {
    edit: false,
    funcionario: initialFuncionario
}
export const initialDataAutorizado: DataModalAccesosProps = {
    edit: false,
    autorizacion:initialAutorizacion
}   