import { IGenerarConsolidados } from "./IGenerarConsolidados";

export interface IHistoricoComisionConsolidado extends IGenerarConsolidados {
    historialComisionConsolidadoId: number;
    comisionConsolidadoId: number;
}