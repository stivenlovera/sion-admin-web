import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IPagoComision, IPagoComisionEstadoReporte } from "../../interfaces/IPagoConsolidado";
import { IHistoricoPagoConsolidado } from "../../interfaces/IHistoricoPagoConsolidado";

setupInterceptors(axios);
export async function listPagoConsolidado() {
    return await axios.get<IResponse<IPagoComision[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/historial-pago/consolidados`);
}
export async function listHistorialPagoConsolidado(id:number) {
    return await axios.get<IResponse<IHistoricoPagoConsolidado[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/historial-pago/historial/${id}`);
}
//export files
export async function PagoHistorialReportExcel(filtro: IPagoComisionEstadoReporte, dataTable: IHistoricoPagoConsolidado[]) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/historial-pago/export-excel`, { filtro, dataTable }, { responseType: 'blob' });
}
export async function PagoHistorialReportPDF(filtro: IPagoComisionEstadoReporte, dataTable: IHistoricoPagoConsolidado[]) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/historial-pago/export-pdf`, { filtro, dataTable }, { responseType: 'blob' });
}
