import { IEstadoReporte } from "./IEstadoReporte"

export interface IPagoComision {
    pagoConsolidadoId: number,
    nombre: string,
    descripcion: string,
    estadoReporteId: number,
    comisionConsolidadoId: number
}
export const initialStatePagoComision: IPagoComision = {
    pagoConsolidadoId: 0,
    nombre: '',
    descripcion: '',
    estadoReporteId: 0,
    comisionConsolidadoId: 0
}

export interface IPagoComisionEstadoReporte extends IEstadoReporte {
    pagoConsolidadoId: number,
    nombre: string,
    descripcion: string,
    estadoReporteId: number,
    comisionConsolidadoId: number
}
export const initialPagoComisionEstadoReporte: IPagoComisionEstadoReporte = {
    comisionConsolidadoId: 0,
    descripcion: '',
    estadoReporteId: 0,
    nombre: '',
    pagoConsolidadoId: 0,
    nombreEstado: ''
}
