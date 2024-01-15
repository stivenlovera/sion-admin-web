import axios from "axios";
import { IResponse } from "../Intefaces/IResponse";
import { setupInterceptors } from "../../utils/axiosInterceptor";
import { IGenerarConsolidados } from "../../interfaces/IGenerarConsolidados";
import { IFiltroConsolidado } from "../../pages/consolidado/generar-consolidado/hooks/useFormikFiltroConsolidado";
import { ICiclo } from "../../interfaces/ICiclo";
import { IEmpresa } from "../../interfaces/IEmpresa";
import { HistorialConsolidado } from "../../pages/consolidado/generar-consolidado/hooks/useModalGenerarConsolidado";
axios.defaults.timeout = 600000;
setupInterceptors(axios);

export async function listConsolidado(ciclo: ICiclo, empresas: IEmpresa[]) {
    return await axios.post<IResponse<IGenerarConsolidados[]>>(`${process.env.REACT_APP_API_GUARDIAN}api/generar-consolidado`,
        { ciclo, empresas });
}

//export files
export async function reportExcel(filtro: IFiltroConsolidado, dataTable: IGenerarConsolidados[]) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/generar-consolidado/export-excel`, { filtro, dataTable }, { responseType: 'blob' });
}
export async function reportPDF(filtro: IFiltroConsolidado, dataTable: IGenerarConsolidados[]) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/generar-consolidado/export-pdf`, { filtro, dataTable }, { responseType: 'blob' });
}

//verificar consolidado
export async function verficarConsolidado(ciclo: ICiclo) {
    return await axios.post<IResponse<boolean>>(`${process.env.REACT_APP_API_GUARDIAN}api/generar-consolidado/verificar`, { ciclo });
}
export async function StoreConsolidado(historialConsolidado: HistorialConsolidado) {
    return await axios.post(`${process.env.REACT_APP_API_GUARDIAN}api/generar-consolidado/store-consolidado`, historialConsolidado);
}
