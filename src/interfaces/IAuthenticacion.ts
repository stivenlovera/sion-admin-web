export interface IAuthenticacion {
    nombre: string,
    apellido: string,
    cargo: string,
    nroDocumento: number,
}
export interface Iroles {
    rolFuncionarioId: number,
    funcionarioId: number,
    modulo: IModulo[],
    rolId: number,
    nombreRol: string
}
export interface IModulo {
    rolModuloId: number,
    rolId: number,
    subModulo: ISubModulo[],
    moduloId: number,
    url: string,
    moduloNombre: string,
    descripcion: string,
    imagenReferencia: string
}
interface ISubModulo {
    rolSubModuloId: number,
    rolModuloId: number,
    componente: IComponentAuthenticate[],
    subModuloId: number,
    url: string,
    moduloSubNombre: string,
    descripcion: string,
    imagenReferencia: string,
    moduloId: number
}
interface IComponentAuthenticate {
    RolComponenteId: number;
    RolSubModuloId: number;
    ComponenteId: number;
    SubModuloId: number;
    ComponenteNombre: string;
    Descripcion: string;
    ImagenReferencia: string;
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
