import axios from "axios";
import { IDataTableRed } from "../../interfaces/IDataTableRed";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { FiltroIDataTableRedProps } from "../../pages/Red";
setupInterceptors(axios);
export async function DataTableRedService(
    fechaInicio: string,
    fechaFin: string,
    ciclo: number,
    tipo: string,
    baja: boolean,
    autoventa: boolean
) {
    return await axios.post<IResponse<IDataTableRed[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/reporte-red/data-table`, {
        fechaInicio, fechaFin, ciclo, tipo, baja, autoventa
    });
}
export async function PreviewPDF(
    filtro: FiltroIDataTableRedProps,
    rows: IDataTableRed[]
) {
    return await axios.post<ArrayBuffer>(`${process.env.REACT_APP_API_GUARDIAN}api/reporte-red/report-activas`, {
        filtro, rows
    }, { responseType: 'arraybuffer' });
}