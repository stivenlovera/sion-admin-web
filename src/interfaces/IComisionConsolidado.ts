import { IEstadoReporte, initilalStateEstadoReporte } from "./IEstadoReporte";

export interface IcomisionConsolidado {
    comisionConsolidadoId: number;
    descripcion: string;
    nombre: string;
    fechaCreacion: string;
    estadoReporte: IEstadoReporte
}
export const initialsStateConsolidadoComisiones: IcomisionConsolidado = {
    comisionConsolidadoId: 0,
    descripcion: '',
    fechaCreacion: '',
    estadoReporte: initilalStateEstadoReporte,
    nombre: ''
}

//configuracion
export interface IconfigCambioEmpresa{

}