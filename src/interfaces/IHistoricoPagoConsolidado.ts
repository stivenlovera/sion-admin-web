import { IGenerarConsolidados } from "./IGenerarConsolidados";

export interface IHistoricoPagoConsolidado extends IGenerarConsolidados {
    historialPagoComisionConsolidadoId: number;
    pagoConsolidadoId: number;
}

