export interface IAuthentication {
    nombre: string;
    apellido:string;
    rol: string;
    cargo:string;
    modulo: IModulos[];
}
export interface IModulos {
    modulo: string;
    subModulo: ISubModulos[]
}
export interface ISubModulos {
    nombre: string;
    url: string;
    funcionalidad: string[]
}