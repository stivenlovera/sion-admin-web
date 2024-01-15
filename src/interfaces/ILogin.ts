import { IModulo, Iroles } from "./IAuthenticacion";

export interface loginDto {
    usuario: string,
    password: string,
    browserName: string,
    browserVersion: string
    osName: string;
    mobile: boolean
}
export interface AuthenticationDto {
    token: string,
    expiration: string;
}
export interface ResIAuthenticacion {
    nombre: string,
    apellido: string,
    cargo: string,
    roles: string,
    autheticate: AuthenticationDto
    modulo:IModulo[]
}
export interface ResIVerificarAuthenticacion {
    nombre: string,
    apellido: string,
    cargo: string,
    roles: string,
    modulo:IModulo[]
}