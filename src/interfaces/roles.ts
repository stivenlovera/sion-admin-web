export interface IRol {
    rolId: number;
    nombreRol: string;
}
export interface IRolLista {
    rolId: number;
    nombreRol: string;
    modulos: string;
}
export const initialRol: IRol = {
    nombreRol: '',
    rolId: 0
}
export const initialRolLista: IRolLista = {
    modulos: '',
    nombreRol: '',
    rolId: 0
}
