export interface IModule {
    moduloId: number;
    url: string;
    moduloNombre: string
}
export interface ISubModule {
    moduloId: number;
    subModuloId: number;
    url: string;
    moduloNombre: string
}
export const initialModulo: IModule = {
    moduloId: 0,
    moduloNombre: '',
    url: ''
}
export const initialSubModulo: ISubModule = {
    moduloId: 0,
    subModuloId: 0,
    url: '',
    moduloNombre: ''
}